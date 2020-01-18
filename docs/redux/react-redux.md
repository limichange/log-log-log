# react-redux

上文我们说到，一个组件如果想从 `store` 存取公用状态，需要进行四步操作：import 引入 store、getState 获取状态、dispatch 修改状态、subscribe 订阅更新，代码相对冗余，我们想要合并一些重复的操作，而 `react-redux` 就提供了一种合并操作的方案：`react-redux` 提供 `Provider` 和 `connect` 两个 API，`Provider` 将 `store` 放进 `this.context` 里，省去了 `import` 这一步，`connect` 将 `getState`、`dispatch` 合并进了 `this.props`，并自动订阅更新，简化了另外三步

## Provider

```js
import React from 'react'
import PropTypes from 'prop-types'
export class Provider extends React.Component {
  // 需要声明静态属性childContextTypes来指定context对象的属性,是context的固定写法
  static childContextTypes = {
    store: PropTypes.object
  }

  // 实现getChildContext方法,返回context对象,也是固定写法
  getChildContext() {
    return { store: this.store }
  }

  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  // 渲染被Provider包裹的组件
  render() {
    return this.props.children
  }
}
```

## connect

```js
connect(mapStateToProps, mapDispatchToProps)(App)
```

```js
export function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    class Connect extends React.Component {
      componentDidMount() {
        //从context获取store并订阅更新
        this.context.store.subscribe(this.handleStoreChange.bind(this))
      }
      handleStoreChange() {
        // 触发更新
        // 触发的方法有多种,这里为了简洁起见,直接forceUpdate强制更新,读者也可以通过setState来触发子组件更新
        this.forceUpdate()
      }
      render() {
        return (
          <Component
            // 传入该组件的props,需要由connect这个高阶组件原样传回原组件
            {...this.props}
            // 根据mapStateToProps把state挂到this.props上
            {...mapStateToProps(this.context.store.getState())}
            // 根据mapDispatchToProps把dispatch(action)挂到this.props上
            {...mapDispatchToProps(this.context.store.dispatch)}
          />
        )
      }
    }
    //接收context的固定写法
    Connect.contextTypes = {
      store: PropTypes.object
    }
    return Connect
  }
}
```

Provider 的意义：我们审视一下 connect 的代码，其实 context 不过是给 connect 提供了获取 store 的途径，我们在 connect 中直接 import store 完全可以取代 context。那么 Provider 存在的意义是什么，其实笔者也想过一阵子，后来才想起...上面这个 connect 是自己写的，当然可以直接 import store，但 react-redux 的 connect 是封装的，对外只提供 api，所以需要让 Provider 传入 store。

## links

- [react-redux](https://juejin.im/post/5def4831e51d45584b585000)
