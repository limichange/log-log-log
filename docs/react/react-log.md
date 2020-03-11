# react log

## 面试官: 谈一谈 HOC、Render props、Hooks

### 创建 HOC 的方式

学习 HOC 我们只需要记住以下 2 点定义:

创建一个函数, 该函数接收一个组件作为输入除了组件, 还可以传递其他的参数
基于该组件返回了一个不同的组件.

### HOC 的优点

不会影响内层组件的状态, 降低了耦合度

### HOC 的缺点

固定的 props 可能会被覆盖
它无法清晰地标识数据的来源
withMouse(MyComponent) 它不会告诉你组件中包含了哪些 props , 增加了调试和修复代码的时间

## 虚拟 DOM 是什么?

在 React 中, React 会先将代码转换成一个 JS 对象, 然后再将这个 JS 对象转换成真正的 DOM. 这个 JS 对象就是所谓的虚拟 DOM.

## links

- [8 个问题带你进阶 React](https://mp.weixin.qq.com/s/5Fe5pHjjJB5EFKvW0Mv7gg)
