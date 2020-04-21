# Deep Vue3 No.2 Retivity System - Effect

你会想 Effect 什么？为什么要他？

Effect 可以处理变量依赖，实现依赖监控。

```ts
```

### function effect

这是第一层，主要有两个判断。一个是看传入的是不是 Effect，如果是的话就把存着的 fn.raw 拿出来。还一个就是根据配置是否立即执行。

```ts
// path: packages/reactivity/src/effect.ts

export function effect<T = any>(
  fn: () => T,
  options: ReactiveEffectOptions = EMPTY_OBJ
): ReactiveEffect<T> {
  if (isEffect(fn)) {
    fn = fn.raw
  }
  const effect = createReactiveEffect(fn, options) // 主要还是 createReactiveEffect
  if (!options.lazy) {
    effect()
  }
  return effect
}
```

开发模式下冻结对象防止你出错。但是由于 freeze 是有开销的，既然开发模式已经避免了错误，发布模式就可以不用特殊处理了。 via: @JackWorks

```ts
export const EMPTY_OBJ: { readonly [key: string]: any } = __DEV__
  ? Object.freeze({})
  : {}
```

### function createReactiveEffect

其实整个过程没有太复杂的逻辑，主要的作用还是把 fn 给存起来，放到 effectStack。

```ts
function createReactiveEffect<T = any>(
  fn: (...args: any[]) => T,
  options: ReactiveEffectOptions
): ReactiveEffect<T> {
  const effect = function reactiveEffect(...args: unknown[]): unknown {
    if (!effect.active) {
      return options.scheduler ? undefined : fn(...args)
    }
    if (!effectStack.includes(effect)) {
      cleanup(effect)
      try {
        enableTracking()
        effectStack.push(effect)
        activeEffect = effect
        return fn(...args)
      } finally {
        effectStack.pop()
        resetTracking()
        activeEffect = effectStack[effectStack.length - 1]
      }
    }
  } as ReactiveEffect

  effect.id = uid++ // ---------| 这些是必要的属性
  effect._isEffect = true // ---|
  effect.active = true // ------|
  effect.raw = fn // -----------|
  effect.deps = [] // ----------|
  effect.options = options // --|
  return effect
}
```

#### enableTracking()

```ts
let shouldTrack = true

// avoid cross-component dependency leaks in setup()
const trackStack: boolean[] = []

export function pauseTracking() {
  trackStack.push(shouldTrack)
  shouldTrack = false
}

export function enableTracking() {
  trackStack.push(shouldTrack)
  shouldTrack = true
}

export function resetTracking() {
  const last = trackStack.pop()
  shouldTrack = last === undefined ? true : last
}
```

## Core

```ts
// The main WeakMap that stores {target -> key -> dep} connections.
// Conceptually, it's easier to think of a dependency as a Dep class
// which maintains a Set of subscribers, but we simply store them as
// raw Sets to reduce memory overhead.
type Dep = Set<ReactiveEffect>
type KeyToDepMap = Map<any, Dep>
const targetMap = new WeakMap<any, KeyToDepMap>()
```

## track

其实就是做一个 Dep 关联，把 activeEffect 和

```ts
// packages/reactivity/src/effect.ts

export function track(target: object, type: TrackOpTypes, key: unknown) {
  if (!shouldTrack || activeEffect === undefined) {
    return
  }

  // depsMap target -> key
  let depsMap = targetMap.get(target)
  if (depsMap === void 0) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // dep key -> dep
  let dep = depsMap.get(key)
  if (dep === void 0) {
    dep = new Set()
    depsMap.set(key, dep)
  }

  if (!dep.has(activeEffect)) {
    // dep和effect做关联
    dep.add(activeEffect)
    activeEffect.deps.push(dep)

    if (__DEV__ && activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key,
      })
    }
  }
}
```

## trigger

```ts
export function trigger(
  target: object,
  type: TriggerOpTypes,
  key?: unknown,
  newValue?: unknown,
  oldValue?: unknown,
  oldTarget?: Map<unknown, unknown> | Set<unknown>
) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    // never been tracked
    return
  }

  const effects = new Set<ReactiveEffect>()
  const computedRunners = new Set<ReactiveEffect>()
  const add = (effectsToAdd: Set<ReactiveEffect> | undefined) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect) => {
        if (effect !== activeEffect || !shouldTrack) {
          if (effect.options.computed) {
            computedRunners.add(effect)
          } else {
            effects.add(effect)
          }
        } else {
          // the effect mutated its own dependency during its execution.
          // this can be caused by operations like foo.value++
          // do not trigger or we end in an infinite loop
        }
      })
    }
  }

  if (type === TriggerOpTypes.CLEAR) {
    // collection being cleared
    // trigger all effects for target
    depsMap.forEach(add)
  } else if (key === 'length' && isArray(target)) {
    depsMap.forEach((dep, key) => {
      if (key === 'length' || key >= (newValue as number)) {
        add(dep)
      }
    })
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key))
    }
    // also run for iteration key on ADD | DELETE | Map.SET
    const isAddOrDelete =
      type === TriggerOpTypes.ADD ||
      (type === TriggerOpTypes.DELETE && !isArray(target))
    if (
      isAddOrDelete ||
      (type === TriggerOpTypes.SET && target instanceof Map)
    ) {
      add(depsMap.get(isArray(target) ? 'length' : ITERATE_KEY))
    }
    if (isAddOrDelete && target instanceof Map) {
      add(depsMap.get(MAP_KEY_ITERATE_KEY))
    }
  }

  const run = (effect: ReactiveEffect) => {
    if (__DEV__ && effect.options.onTrigger) {
      effect.options.onTrigger({
        effect,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget,
      })
    }
    if (effect.options.scheduler) {
      effect.options.scheduler(effect)
    } else {
      effect()
    }
  }

  // Important: computed effects must be run first so that computed getters
  // can be invalidated before any normal effects that depend on them are run.
  computedRunners.forEach(run)
  effects.forEach(run)
}
```
