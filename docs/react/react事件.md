# React 事件

React 事件并没有绑定在真实的 Dom 节点上，而是通过事件代理，在最外层的 document 上对事件进行统一分发。

onClick、 onCaptureClick）判断是进行冒泡还是捕获。

React 在自己的合成事件中重写了 stopPropagation 方法，将 isPropagationStopped 设置为 true，然后在遍历每一级事件的过程中根据此遍历判断是否继续执行。这就是 React 自己实现的冒泡机制。

给 document 注册原生事件回调为 dispatchEvent

## link

- https://mp.weixin.qq.com/s/vJOAiiP0PSMOgPStZw-rQA
