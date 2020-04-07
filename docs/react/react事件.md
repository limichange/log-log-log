# React 事件

## React 如何实现自己的事件机制？

React 事件并没有绑定在真实的 Dom 节点上，而是通过事件代理，在最外层的 document 上对事件进行统一分发。

onClick、 onCaptureClick）判断是进行冒泡还是捕获。

React 在自己的合成事件中重写了 stopPropagation 方法，将 isPropagationStopped 设置为 true，然后在遍历每一级事件的过程中根据此遍历判断是否继续执行。这就是 React 自己实现的冒泡机制。

给 document 注册原生事件回调为 dispatchEvent

## 为何 React 事件要自己绑定 this？

可见，事件处理函数是直接调用的，并没有指定调用的组件，所以不进行手动绑定的情况下直接获取到的 this 是不准确的，所以我们需要手动将当前组件绑定到 this 上。

## 原生事件和 React 事件的区别？

- React 事件使用驼峰命名，而不是全部小写。
- 通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。
- 在 React 中你不能通过返回 false 来阻止默认行为。必须明确调用 preventDefault。

## React 的合成事件是什么？

React 根据 W3C 规范定义了每个事件处理函数的参数，即合成事件。

事件处理程序将传递 SyntheticEvent 的实例，这是一个跨浏览器原生事件包装器。它具有与浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()，在所有浏览器中他们工作方式都相同。

React 合成的 SyntheticEvent 采用了事件池，这样做可以大大节省内存，而不会频繁的创建和销毁事件对象。

另外，不管在什么浏览器环境下，浏览器会将该事件类型统一创建为合成事件，从而达到了浏览器兼容的目的。

## React 和原生事件的执行顺序是什么？可以混用吗？

React 的所有事件都通过 document 进行统一分发。当真实 Dom 触发事件后冒泡到 document 后才会对 React 事件进行处理。

所以原生的事件会先执行，然后执行 React 合成事件，最后执行真正在 document 上挂载的事件

React 事件和原生事件最好不要混用。原生事件中如果执行了 stopPropagation 方法，则会导致其他 React 事件失效。因为所有元素的事件将无法冒泡到 document 上，导致所有的 React 事件都将无法被触发。。

## link

- https://mp.weixin.qq.com/s/vJOAiiP0PSMOgPStZw-rQA

```js
// compose([fn1,fn2,fn3..]) 转成 fn3(fn2(fn1()))

function compose(funcArray) {
  let funcResult = null

  for (let i = 0; i < funcArray.length; i++) {
    funcResult = funcArray[i](funcResult)
  }
}
```
