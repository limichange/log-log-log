# Promise 和 co 的原理实现

JavaScript 中有两种异步宏任务 macro-task 和微任务 micro-task

在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完

## links

- [Promise 和 co 的原理实现](https://segmentfault.com/a/1190000010159031#item-2-1)
- [co 源码精读](https://fecoding.cn/2017/07/30/the-analysis-of-the-source-code-of-co/)
