# Promise

promise.all

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。现已被 ES6 纳入进规范中。

Promise 在初始化时，传入的函数是同步执行的，然后注册 then 回调。注册完之后，继续往下执行同步代码，在这之前，then 中回调不会执行。同步代码块执行完毕后，才会在事件循环中检测是否有可用的 promise 回调，如果有，那么执行，如果没有，继续下一个事件循环。
关于 Promise 在事件循环中还有一个 微任务的概念（microtask），感兴趣的话可以看我这篇关于 nodejs 时间循环的文章 剖析 nodejs 的事件循环，虽然和浏览器端有些不同，但是 Promise 微任务的执行时机相差不大。

## questions

- promise 定义时传入的函数什么时候执行的？
- promise.all？如何实现一个链式异步请求，一个请求完成继续下一个请求?then 链式执行呗。中间如果有一个 promise 出错怎么办？如何确保执行到最后？我答的还是 try catch 前行 resolve，不过好像不太对，有知道的大神求指导。

## links

- [面试精选之 Promise](https://juejin.im/post/5b31a4b7f265da595725f322)
