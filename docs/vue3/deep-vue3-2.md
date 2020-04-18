# Deep Vue3 No.2 Retivity System

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
├── index.js # --------------------- 入口
└── src # -------------------------- 具体实现
    ├── baseHandlers.ts
    ├── collectionHandlers.ts
    ├── computed.ts
    ├── effect.ts
    ├── index.ts
    ├── operations.ts
    ├── reactive.ts
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
