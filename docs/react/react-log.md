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

### 创建 render props 的方式

接收一个外部传递进来的 props 属性
将内部的 state 作为参数传递给调用组件的 props 属性方法.

从上面的代码可以看出, hook 有以下的特性. 它解决了上面 hoc 和 render props 的缺点.

hook 可以重命名
如果 2 个 hook 暴露的参数一样,我们可以简单地进行重命名.

hook 会清晰地标注来源
从上面的例子可以简单地看到, x 和 y 来源于 useMouse. 下面的 x, y 来源于 usePage.

hook 可以让你在 return 之外使用数据
hook 不会嵌套
简单易懂, 对比 hoc 和 render props 两种方式, 它非常直观, 也更容易理解.

## 虚拟 DOM 是什么?

在 React 中, React 会先将代码转换成一个 JS 对象, 然后再将这个 JS 对象转换成真正的 DOM. 这个 JS 对象就是所谓的虚拟 DOM.

## 深入浅出 React（四）：虚拟 DOM Diff 算法解析

## 可以用 <></> 来包裹. <></> 会被编译成 <React.Fragment/>.

## 五. setState 什么时候是同步,什么时候是异步?

这里的“异步”不是说异步代码实现. 而是说 react 会先收集变更,然后再进行统一的更新.

setState 在原生事件和 setTimeout 中都是同步的. 在合成事件和钩子函数中是异步的.

在 setState 中, 会根据一个 isBatchingUpdates 判断是直接更新还是稍后更新, 它的默认值是 false. 但是 React 在调用事件处理函数之前会先调用 batchedUpdates 这个函数, batchedUpdates 函数 会将 isBatchingUpdates 设置为 true. 因此, 由 react 控制的事件处理过程, 就变成了异步(批量更新).

## 六. React 里面的事件机制.

在组件挂载的阶段, 根据组件生命的 react 事件, 给 document 添加事件 addEventListener, 并添加统一的事件处理函数 dispatchEvent.

将所有的事件和事件类型以及 react 组件进行关联, 将这个关系保存在一个 map 里. 当事件触发的时候, 首先生成合成事件, 根据组件 id 和事件类型找到对应的事件函数, 模拟捕获流程, 然后依次触发对应的函数.

## links

- [8 个问题带你进阶 React](https://mp.weixin.qq.com/s/5Fe5pHjjJB5EFKvW0Mv7gg)
- [深入浅出 React（四）：虚拟 DOM Diff 算法解析](https://www.infoq.cn/article/react-dom-diff)
