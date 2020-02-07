# 比较 React 和 Vue

## 监听数据变化的实现原理不同

- Vue 通过 getter/setter 以及一些函数，能精确知道数据变化
- React 默认是通过比较引用的方式(diff)进行的，React 不精确监听数据变化

## 数据流不同

- Vue2.0 可以通过 props 实现双向绑定，用 vuex 单向数据流的状态管理框架
- React 不支持双向绑定，提倡单项数据流，Redux 单向数据流的状态管理框架

## 组件通信的区别

### Vue 三种组件通信方法

父组件通过 props 向子组件传递数据或回调

子组件通过事件 event 向父组件发送数据或回调

通过 provide/inject 实现父组件向子组件传入数据，可跨层级

### React 三种组件通信方法

父组件通过 props 向子组件传递数据

React 不支持子组件像父组件发送数据，而使用的是回调函数

通过 context 实现父组件向子组件传入数据， 可跨层级

## links

- [如何比较 React 和 Vue?](https://segmentfault.com/a/1190000021698504#item-5)
