# DOM 事件

DOM 0 级的事件处理的步骤：先找到 DOM 节点，然后把处理函数赋值给该节点对象的事件属性。

DOM 2 级事件在 DOM0 级事件的基础上弥补了一个处理程序无法同时绑定多个处理函数的缺点，允许给一个处理程序添加多个处理函数。也就是说，使用 DOM2 事件可以随意添加多个处理函数，移除 DOM2 事件要用`removeEventListener`

DOM3 级事件在 DOM2 级事件的基础上添加了更多的事件类型

addEventListener 的第三个参数为指定事件是否在捕获阶段执行，设置为 true 表示事件在捕获阶段执行，而设置为 false 表示事件在冒泡阶段执行

```js
event.preventDefault()
event.stopPropagation()
```

## links

- [DOM 事件深入浅出](https://www.jianshu.com/p/8c41a302bb17)
- [深入理解 DOM 事件机制](https://juejin.im/post/5c71e80d51882562547bb0ce)
