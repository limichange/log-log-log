# redux 原理

- 1.将应用的状态统一放到 state 中，由 store 来管理 state。
- 2.reducer 的作用是返回一个新的 state 去更新 store 中对用的 state。
- 3.按 redux 的原则,UI 层每一次状态的改变都应通过 action 去触发，action 传入对应的 reducer 中，reducer 返回一个新的 state 更新 store 中存放的 state，这样就完成了一次状态的更新
- 4.subscribe 是为 store 订阅监听函数，这些订阅后的监听函数是在每一次 dipatch 发起后依次执行
- 5.可以添加中间件对提交的 dispatch 进行重写

## 实现

```js
export const createStore = () => {
  let currentState = {} // 公共状态
  function getState() {} // getter
  function dispatch() {} // setter
  function subscribe() {} // 发布订阅
  return { getState, dispatch, subscribe }
}
```

### getState

```js
export const createStore = () => {
  let currentState = {} // 公共状态
  function getState() {
    // getter
    return currentState
  }
  function dispatch() {} // setter
  function subscribe() {} // 发布订阅
  return { getState, dispatch, subscribe }
}
```

### dispatch

```js
export const createStore = () => {
  let currentState = {}
  function getState() {
    return currentState
  }
  function dispatch(action) {
    switch (action.type) {
      case 'plus':
        currentState = {
          ...state,
          count: currentState.count + 1,
        }
    }
  }
  function subscribe() {}
  return { getState, subscribe, dispatch }
}
```

我们把对 actionType 的判断写在了 dispatch 中，这样显得很臃肿，也很笨拙，于是我们想到把这部分修改 state 的规则抽离出来放到外面，这就是我们熟悉的 reducer。

```js
import { reducer } from './reducer'
export const createStore = (reducer) => {
  let currentState = {}
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
  }
  function subscribe() {}
  return { getState, dispatch, subscribe }
}
```

```js
const store = createStore(reducer) //创建store
store.dispatch({ type: 'plus' }) //执行加法操作,给count加1
console.log(store.getState()) //获取state
```

我们得先进行 `store` 数据初始化，我们在执行 `dispatch({ type: 'plus' })`之前先进行一次初始化的 `dispatch`，这个 `dispatch` 的 `actionType` 可以随便填，只要不和已有的 `type` 重复，让 `reducer` 里的 `switch` 能走到 `default` 去初始化 `store` 就行了

```js
import { reducer } from './reducer'
export const createStore = (reducer) => {
  let currentState = {}
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
  }
  function subscribe() {}
  dispatch({ type: '@@REDUX_INIT' }) //初始化store数据
  return { getState, subscribe, dispatch }
}

const store = createStore(reducer) //创建store
store.dispatch({ type: 'plus' }) //执行加法操作,给count加1
console.log(store.getState()) //获取state
```

### subscribe 实现

```js
import { reducer } from './reducer'
export const createStore = (reducer) => {
  let currentState = {}
  let observers = [] //观察者队列
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    observers.forEach((fn) => fn())
  }
  function subscribe(fn) {
    observers.push(fn)
  }
  dispatch({ type: '@@REDUX_INIT' }) //初始化store数据
  return { getState, subscribe, dispatch }
}
```

```js
import { reducer } from './reducer'
export const createStore = (reducer) => {
  let currentState = {}
  let observers = [] //观察者队列
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    observers.forEach((fn) => fn())
  }
  function subscribe(fn) {
    observers.push(fn)
  }
  dispatch({ type: '@@REDUX_INIT' }) //初始化store数据
  return { getState, subscribe, dispatch }
}

const store = createStore(reducer) //创建store
store.subscribe(() => {
  console.log('组件1收到store的通知')
})
store.subscribe(() => {
  console.log('组件2收到store的通知')
})
store.dispatch({ type: 'plus' }) //执行dispatch，触发store的通知
```

## links

- [10 行代码看尽 redux 原理 —— 全面剖析 redux | react-redux | redux 中间件设计实现（近 8k 字）](https://juejin.im/post/5def4831e51d45584b585000)
- [一幅图明白 React-Redux 的原理](https://juejin.im/post/5acdbe8f51882548fe4a7af1)
