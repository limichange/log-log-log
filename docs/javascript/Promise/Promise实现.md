# Promise 实现

```js
new Promise((resolve, reject) => {
  console.log('promise 1')
  resolve(1)
})
```

我们向 `promise` 构造函数中传入一个函数，这个函数的两个参数分别是：`resolve` 和 `reject`。显然，这两个参数本身也是函数。他们的作用就是改变 `promise` 实例的状态，`resolve` 是 `pending` -> `resolved`，`reject` 是 `pending` -> `rejected`。

除此之外，输出了 promise 1，说明 promise 构造函数是立即执行的。
