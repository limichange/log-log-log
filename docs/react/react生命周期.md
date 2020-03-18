# 生命周期

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

“Render 阶段”
纯净且不包含副作用。可能会被 React 暂停，中止或重新启动。

“Commit 阶段”
可以使用 DOM，运行副作用，安排更新。

- 挂载阶段
- 更新阶段
- 卸载阶段

## 挂载阶段

- constructor
- getDerivedStateFromProps
- render
- componentDidMount

## 更新阶段

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

## 卸载阶段

- componentWillUnmount

## links

- [我对 React v16.4 生命周期的理解](https://juejin.im/post/5b6f1800f265da282d45a79a)
