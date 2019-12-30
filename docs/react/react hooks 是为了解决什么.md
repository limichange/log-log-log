# react hooks 是为了解决什么

React Hooks 要解决的问题是状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。

这个状态指的是状态逻辑，所以称为状态逻辑复用会更恰当，因为只共享数据处理逻辑，不会共享数据本身。

## 优势

- 多个状态不会产生嵌套，写法还是平铺的（renderProps 可以通过 compose 解决，可不但使用略为繁琐，而且因为强制封装一个新对象而增加了实体数量）。
- Hooks 可以引用其他 Hooks。
- 更容易将组件的 UI 与状态分离。
- 能在无需修改组件结构的情况下复用状态逻辑（自定义 Hooks ）
- 能将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据）

Hooks 方便的地方是在组件销毁时移除副作用，所以我们可以安心的利用 Hooks 做一些副作用。

## links

- [一篇看懂 React Hooks](https://zhuanlan.zhihu.com/p/50597236)
