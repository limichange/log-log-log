# Promise 实现

```js
new Promise((resolve, reject) => {
  console.log('promise 1')
  resolve(1)
})
```

我们向 `promise` 构造函数中传入一个函数，这个函数的两个参数分别是：`resolve` 和 `reject`。显然，这两个参数本身也是函数。他们的作用就是改变 `promise` 实例的状态，`resolve` 是 `pending` -> `resolved`，`reject` 是 `pending` -> `rejected`。

除此之外，输出了 `promise 1`，说明 `promise` 构造函数是立即执行的。

## 代码实现

```js
// 3中状态
const STATUS_PENDING = Symbol('pending')
const STATUS_RESOLVED = Symbol('resolved')
const STATUS_REJECTED = Symbol('rejected')

function MyPromise(executor) {
  const that = this
  that.data = null
  that.status = STATUS_PENDING

  // TODO: 下一节解释，promise实例的回调函数集
  that.onResolvedCallback = []
  that.onRejectedCallback = []

  function resolve(value) {
    // TODO: 下一节实现
  }

  function reject(error) {
    // TODO: 下一节实现
  }

  try {
    // 默认是交给参数传入的回调函数来执行状态的变更
    executor(resolve, reject)
  } catch (error) {
    // 如果回调函数的执行发生错误，抛出异常
    // promise会“主动”扭转状态
    reject(error)
  }
}
```

### resolve 和 reject 实现

resolve 的两个作用就是：

- 改变 promise 状态
- 更新 promise 的值

```js
function resolve(value) {
  if (that.status !== STATUS_PENDING) {
    return
  }

  that.data = value
  that.status = STATUS_RESOLVED
  for (let callback of that.onResolvedCallback) {
    // 这里that指的是指向promise实例的指针
    callback(that.data)
  }
}
```

```js
function reject(error) {
  if (that.status !== STATUS_PENDING) {
    return
  }

  that.data = error
  that.status = STATUS_REJECTED
  for (let callback of that.onRejectedCallback) {
    callback(that.data)
  }
}
```
