# Deep Vue3 No.2 Retivity System

Retivity System 是 vue3 的核心之一，实现了数据的监听。

## 开始之前

你需要知道`WeakMap`、`Reflect`和`Proxy` 是什么和了解他们的基本用法。

Vue 定义了一些全局变量用于区分构建的环境，这些变量在编译后会直接替换成 Boolean。

```ts
// path: packages/global.d.ts

// Global compile-time constants
declare var __DEV__: boolean
declare var __TEST__: boolean
declare var __BROWSER__: boolean
declare var __BUNDLER__: boolean
declare var __RUNTIME_COMPILE__: boolean
declare var __GLOBAL__: boolean
declare var __NODE_JS__: boolean
declare var __COMMIT__: string
declare var __VERSION__: string

// Feature flags
declare var __FEATURE_OPTIONS__: boolean
declare var __FEATURE_SUSPENSE__: boolean
```

## 使用

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

  // 存进缓存
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

定义了 4 个 WeakMap 来存储你的观察对象。

## 原理

下图是代码结构，为了我们方便，我删掉了不重要的部分。剩下的只有三部分，稍微看一下。

```bash
.
├── __tests__ # ------------------- 测试
│   ├── collections
│   │   ├── Map.spec.ts
│   │   ├── Set.spec.ts
│   │   ├── WeakMap.spec.ts
│   │   └── WeakSet.spec.ts
│   ├── computed.spec.ts
│   ├── effect.spec.ts
│   ├── reactive.spec.ts
│   ├── reactiveArray.spec.ts
│   ├── readonly.spec.ts
│   └── ref.spec.ts
├── index.js # --------------------- 发布后的入口
└── src # -------------------------- 具体实现
    ├── baseHandlers.ts
    ├── collectionHandlers.ts
    ├── computed.ts
    ├── effect.ts
    ├── index.ts # ----------------- src入口
    ├── operations.ts # ------------ 定义了 TrackOpTypes 和 TriggerOpTypes这两个枚举类型
    ├── reactive.ts # -------------- 创建 Reactive
    └── ref.ts
```

有个地方会让你有点困惑，为何有两个 index？

<!-- todo -->

或许你会好奇这个图是如何生成的？

<!-- todo -->

## index.ts

```ts
export {
  ref,
  unref,
  shallowRef,
  isRef,
  toRef,
  toRefs,
  customRef,
  Ref,
  UnwrapRef,
} from './ref'
export {
  reactive,
  readonly,
  isReactive,
  isReadonly,
  isProxy,
  shallowReactive,
  shallowReadonly,
  markRaw,
  toRaw,
} from './reactive'
export {
  computed,
  ComputedRef,
  WritableComputedRef,
  WritableComputedOptions,
  ComputedGetter,
  ComputedSetter,
} from './computed'
export {
  effect,
  stop,
  trigger,
  track,
  enableTracking,
  pauseTracking,
  resetTracking,
  ITERATE_KEY,
  ReactiveEffect,
  ReactiveEffectOptions,
  DebuggerEvent,
} from './effect'
export { TrackOpTypes, TriggerOpTypes } from './operations'
```

好的，这个时候我们会一头雾水，眼前只有一团 API。这个时候 test 就是最好的 API Document。
