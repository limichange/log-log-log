# Ref

## shallowRef & ref

```ts
export function shallowRef<T>(value: T): T extends Ref ? T : Ref<T>
export function shallowRef<T = any>(): Ref<T | undefined>
export function shallowRef(value?: unknown) {
  return createRef(value, true)
}

export function ref<T>(value: T): T extends Ref ? T : Ref<UnwrapRef<T>>
export function ref<T = any>(): Ref<T | undefined>
export function ref(value?: unknown) {
  return createRef(value)
}
```

## convert

```ts
const convert = <T extends unknown>(val: T): T =>
  isObject(val) ? reactive(val) : val
```

## createRef

```ts
function createRef(value: unknown, shallow = false) {
  // check type
  if (isRef(value)) {
    return value
  }
  if (!shallow) {
    value = convert(value)
  }
  const r = {
    _isRef: true,
    get value() {
      track(r, TrackOpTypes.GET, 'value')
      return value
    },
    set value(newVal) {
      value = shallow ? newVal : convert(newVal)
      trigger(
        r,
        TriggerOpTypes.SET,
        'value',
        __DEV__ ? { newValue: newVal } : void 0
      )
    },
  }
  return r
}
```
