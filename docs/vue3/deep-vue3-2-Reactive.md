## Reactive

我们先来看看如何监听一个对象。

```ts
import { reactive, isReactive } from '@vue/reactivity'

// 创建 object
let originObject = { name: 'originObject' }

// 监听 object
const observedObject = reactive(originObject)

// 顺便检查下类型
console.log(isReactive(observedObject)) // true
```

好，逻辑很简单，我们创建了一个对象，然后用 reactive 函数把对象作为参数创建了一个可监听的新对象。

### Proxy 的构建

我们先不着急看别的用法，来看看 reactive 是如何实现的。

`target` → `reactive` → `createReactiveObject` → `new Proxy(target, handlers)` → `observed`

我们定位到 reactive 的声明

```ts
// path: packages/reactivity/src/reactive.ts

export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (readonlyToRaw.has(target)) {
    return target
  }

  // 可以看到 reactive 是用 createReactiveObject 来创建的
  //
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    mutableHandlers,
    mutableCollectionHandlers
  )
}
```

```ts
function createReactiveObject(
  target: unknown,
  toProxy: WeakMap<any, any>,
  toRaw: WeakMap<any, any>,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // 如果传入的不是 object 那么就不作处理
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // 检查 object 的观察对象是否已经被创建过了
  let observed = toProxy.get(target)
  if (observed !== void 0) {
    return observed
  }
  // 检查 object 是不是已经过了
  if (toRaw.has(target)) {
    return target
  }
  // 检查类型是否支持
  if (!canObserve(target)) {
    return target
  }

  // 根据类型创建处理器，具体是如何代理的，逻辑就在处理器里定义
  // const collectionTypes = new Set<Function>([Set, Map, WeakMap, WeakSet])
  // 如果类型是Set、Map、WeakMap和WeakSet之外的类型就用普通处理器，否则就用集合处理器来特殊处理
  const handlers = collectionTypes.has(target.constructor)
    ? collectionHandlers
    : baseHandlers

  // 使用 Proxy 进行代理
  observed = new Proxy(target, handlers)

  // 存进缓存，之后的类型检查和转化都需要到对应的WeakMap里查找
  toProxy.set(target, observed)
  toRaw.set(observed, target)

  // 创建完毕
  return observed
}
```

内部的缓存，如果一个对象已经被观察了，那么就可以直接返回这个创建好的观察对象。

```ts
// path: packages/reactivity/src/reactive.ts

// WeakMaps that store {raw <-> observed} pairs.
const rawToReactive = new WeakMap<any, any>()
const reactiveToRaw = new WeakMap<any, any>()
const rawToReadonly = new WeakMap<any, any>()
const readonlyToRaw = new WeakMap<any, any>()
```

定义了 4 个 WeakMap 来存储你的观察对象，是整个机制的数据核心。当创建了一个代理后，就会保存到这些 WeakMap 当中。

```ts
// path: packages/reactivity/src/reactive.ts

// 当我们在里面找到了这么一个代理的话，就说明这是一个代理类型的变量。
export function isProxy(value: unknown): boolean {
  return readonlyToRaw.has(value) || reactiveToRaw.has(value)
}

// 将代理转化成原对象，只要通过键值对就能轻松找到
export function toRaw<T>(observed: T): T {
  observed = readonlyToRaw.get(observed) || observed
  return reactiveToRaw.get(observed) || observed
}
```

### baseHandlers

```ts
import {
  mutableHandlers,
  readonlyHandlers,
  shallowReactiveHandlers,
  shallowReadonlyHandlers,
} from './baseHandlers'
```

### markRaw

```ts
const obj = reactive({
  foo: { a: 1 },
  bar: markRaw({ b: 2 }),
})

isReactive(obj.foo) // true
isReactive(obj.bar) // false
```

```ts
// path: packages/reactivity/src/reactive.ts

// WeakSets for values that are marked readonly or non-reactive during
// observable creation.
const rawValues = new WeakSet<any>()

const canObserve = (value: any): boolean => {
  return (
    !value._isVue &&
    !value._isVNode &&
    isObservableType(toRawType(value)) &&
    !rawValues.has(value) && // --------------------- 标记为不代理数据
    !Object.isFrozen(value)
  )
}

export function markRaw<T extends object>(value: T): T {
  rawValues.add(value)
  return value
}
```
