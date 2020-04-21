# Deep Vue3 No.2 Reactivity System

Reactivity System 是 vue3 的核心之一，实现了数据的监听。

## 开始之前

首先你需要知道`WeakMap`、`WeakSet`、`Reflect`和`Proxy` 是什么和了解他们的基本用法。

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

## 结构

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
    ├── baseHandlers.ts # ---------- 定义了 Proxy 里通常类型的 handler 行为
    ├── collectionHandlers.ts # ---- 定义了 Proxy 里Set、Map、WeakSet 和 WeakMap 的 handler 行为
    ├── computed.ts # -------------- 计算属性
    ├── effect.ts
    ├── index.ts # ----------------- lib入口
    ├── operations.ts # ------------ 定义了 TrackOpTypes 和 TriggerOpTypes这两个枚举类型
    ├── reactive.ts # -------------- 通过 Proxy 来创建 Reactive
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
  reactive, // 监听对象
  readonly,
  isReactive, // 检查是否是观察者
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
