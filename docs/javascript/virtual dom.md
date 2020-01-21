# virtual dom

## 为什么需要 Virtual Dom

为了有效解决 DOM 更新开销的问题，采用了 Virtual DOM 的思路

而 VirtualDOM 的主要思想就是模拟 DOM 的树状结构，在内存中创建保存映射 DOM 信息的节点数据，在由于交互等因素需要视图更新时，先通过对节点数据进行 diff 后得到差异结果后，再一次性对 DOM 进行批量更新操作

Vue 中的 snabbdom 与 React 中的 Reconcile 这两个 Virtual DOM 的实现方案

在 snabbdom 中提供了 h 函数做为创建 VirtualDOM 的主要函数，h 函数接受的三个参数同时揭示了 diff 算法中关注的三个核心：节点类型，属性数据，子节点对象。

在 React16 的重写中，最重要的改变时将核心架构改为了代号为 Fiber 的异步渲染架构。从本质上看，一个 Fiber 就是一个 POJO 对象，一个 React Element 可以对应一个或多个 Fiber 节点，Fiber 包含着 DOM 节点与 React 组件中的所有工作需要的属性数据。因此虽然 React 的代码中其实没有明确的 Virtual DOM 概念，但通过对 Fiber 的设计充分完成了 Virtual DOM 的功能与机制。

Fiber 除了承担 Virtual DOM 的工作之外，它真正设计目的是实现一种在前端执行的轻量执行线程，同普通线程一样共享定址空间，但却能够受 React 自身的 Fiber 系统调度，实现渲染任务细分，可计时，可打断，可重启，可调度的协作式多任务处理的强大渲染任务控制机制。

## links

- [Vue.js 从 Virtual DOM 映射到真实 DOM 的过程](https://juejin.im/post/5b86f6cc5188256fd44c0ce9)
- [深入框架本源系列 —— Virtual Dom](https://juejin.im/post/5b10dd36e51d4506e04cf802)
- [探索 Virtual DOM 的前世今生](https://juejin.im/post/5b0638a9f265da0db53bbb6d)
