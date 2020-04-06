# setState

在 React 的生命周期和合成事件中， React 仍然处于他的更新机制中，这时无论调用多少次 setState，都会不会立即执行更新，而是将要更新的·存入 \_pendingStateQueue，将要更新的组件存入 dirtyComponent。

setState 本身并不是异步的，而是 React 的批处理机制给人一种异步的假象。

setState 的第二个参数接收一个函数，该函数会在 React 的批处理机制完成之后调用，所以你想在调用 setState 后立即获取更新后的值，请在该回调函数中获取。

React 会对多次连续的 setState 进行合并，如果你想立即使用上次 setState 后的结果进行下一次 setState，可以让 setState 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数。

## links

- https://mp.weixin.qq.com/s/vJOAiiP0PSMOgPStZw-rQA
