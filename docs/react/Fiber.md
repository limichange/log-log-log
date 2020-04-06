# Fiber

## 背景

在这里面 React 会递归比对 VirtualDOM 树，找出需要变动的节点，然后同步更新它们, 一气呵成。这个过程 React 称为 Reconcilation(中文可以译为协调).

为了给用户制造一种应用很快的'假象'，我们不能让一个程序长期霸占着资源. 你可以将浏览器的渲染、布局、绘制、资源加载(例如 HTML 解析)、事件响应、脚本执行视作操作系统的'进程'，我们需要通过某些调度策略合理地分配 CPU 资源，从而提高浏览器的用户响应速率, 同时兼顾任务执行效率。

所以 React 通过 Fiber 架构，让自己的 Reconcilation 过程变成可被中断。 '适时'地让出 CPU 执行权，除了可以让浏览器及时地响应用户的交互

当时被大家拍手叫好的 VDOM，为什么今日会略显疲态，这还要从它的工作原理说起。在 react 发布之初，设想未来的 UI 渲染会是异步的，从 setState() 的设计和 react 内部的事务机制可以看出这点。在 react@16 以前的版本，reconciler（现被称为 stack reconciler ）采用自顶向下递归，从根组件或 setState() 后的组件开始，更新整个子树。如果组件树不大不会有问题，但是当组件树越来越大，递归遍历的成本就越高，持续占用主线程，这样主线程上的布局、动画等周期性任务以及交互响应就无法立即得到处理，造成顿卡的视觉效果。

那么这个问题如何解决，这就是 fiber reconciler 要做的事了。简而言之可以看下图，将要执行的 JS 做拆分，保证不会阻塞主线程（Main thread）即可。

## 工作原理

React 通过 Fiber 将树的遍历变成了链表的遍历

Reconciliation(协调阶段) 和 Commit(提交阶段).

React Fiber 也被称为虚拟栈帧(Virtual Stack Frame)

- React 应用中的基础单元是组件，应用以组件树形式组织，渲染组件；
- Fiber 调和器基础单元则是 fiber（调和单元），应用以 fiber 树形式组织，应用 Fiber 算法；
- 组件树和 fiber 树结构对应，一个组件实例有一个对应的 fiber 实例；
- Fiber 负责整个应用层面的调和，fiber 实例负责对应组件的调和；

除了 Fiber 工作单元的拆分，两阶段的拆分也是一个非常重要的改造，在此之前都是一边 Diff 一边提交的。先来看看这两者的区别:

- 协调阶段: 可以认为是 Diff 阶段, 这个阶段可以被中断, 这个阶段会找出所有节点变更，例如节点新增、删除、属性变更等等, 这些变更 React 称之为'副作用(Effect)' . 以下生命周期钩子会在协调阶段被调用：

  - `constructor`
  - `componentWillMount` `废弃`
  - `componentWillReceiveProps` `废弃`
  - `static getDerivedStateFromProps`
  - `shouldComponentUpdate`
  - `componentWillUpdate` `废弃`
  - `render`

- 提交阶段: 将上一个阶段计算出来的需要处理的**副作用(Effects)**一次性执行了。这个阶段必须同步执行，不能被打断. 这些生命周期钩子在提交阶段被执行:

  - `getSnapshotBeforeUpdate` 严格来说，这个是在进入 commit 阶段前调用
  - `componentDidMount`
  - `componentDidUpdate`
  - `componentWillUnmount`

浏览器在一帧内可能会做执行下列任务，而且它们的执行顺序基本是固定的:

- 处理用户输入事件
- Javascript 执行
- requestAnimation 调用
- 布局 Layout
- 绘制 Paint

## links

- [React Fiber](https://juejin.im/post/5ab7b3a2f265da2378403e57)
- [React Fiber 架构](https://zhuanlan.zhihu.com/p/37095662)
- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85)
- [浅析 React Fiber](https://juejin.im/post/5be969656fb9a049ad76931f)
