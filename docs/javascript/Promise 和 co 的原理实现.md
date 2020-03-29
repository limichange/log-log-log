# Promise 和 co 的原理实现

JavaScript 中有两种异步宏任务 macro-task 和微任务 micro-task

在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 macrotask 的队列（这个队列也被叫做 task queue）中取出第一个任务，执行完毕后取出 microtask 队列中的所有任务顺序执行；之后再取 macrotask 任务，周而复始，直至两个队列的任务都取完

我们可以看到，co 的核心逻辑在于第 90 行的 next 函数，这里将每一次 yield 的返回值包装成 Promise 对象，在 Promise 的 onFulfilled 和 onRejected 状态中继续递归调用 next 函数，保证链式调用自动执行，使得异步的代码能够以同步的方式运行。

将通过 yield 返回的对象的 value 保持为一个 Promise 对象，执行之，即可拿到程序的执行权。然后通过 Promise.then 和 Promise.reject 方法中调用 generator 的 next 方法，可以交还程序执行权。如此达到自动执行 generator 函数的效果。

await 会把后面的 promise 放到 microtask queue 中，所以当 await 和 setTimeout 放到一起时，会先执行 await 的部分，再执行 setTimeout 的部分（setTimeout 会进入 macrotask，优先级低于 microtask）。比如：

```js
function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF()
    function step(nextF) {
      let next
      try {
        next = nextF()
      } catch (e) {
        return reject(e)
      }
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(
        function(v) {
          step(function() {
            return gen.next(v)
          })
        },
        function(e) {
          step(function() {
            return gen.throw(e)
          })
        }
      )
    }
    step(function() {
      return gen.next(undefined)
    })
  })
}
```

## links

- [Promise 和 co 的原理实现](https://segmentfault.com/a/1190000010159031#item-2-1)
- [co 源码精读](https://fecoding.cn/2017/07/30/the-analysis-of-the-source-code-of-co/)
