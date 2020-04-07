# redux 和 mobx 的差异

## 选择 Mobx 的原因

学习成本少：Mobx 基础知识很简单，学习了半小时官方文档和示例代码就搭建了新项目实例；而 Redux 确较繁琐，流程较多，需要配置，创建 store，编写 reducer，action，如果涉及异步任务，还需要引入 redux-thunk 或 redux-saga 编写额外代码，Mobx 流程相比就简单很多，并且不需要额外异步处理库；

面向对象编程：Mobx 支持面向对象编程，我们可以使用@observable and @observer，以面向对象编程方式使得 JavaScript 对象具有响应式能力；而 Redux 最推荐遵循函数式编程，当然 Mobx 也支持函数式编程；

模版代码少：相对于 Redux 的各种模版代码，如，actionCreater，reducer，saga／thunk 等，Mobx 则不需要编写这类模板代码；

## links

- [你需要 Mobx 还是 Redux？](https://juejin.im/post/5a7fd72c5188257a766324ae#heading-10)
