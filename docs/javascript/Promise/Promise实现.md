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
const status = {
  pending: Symbol('pending'),
  resolved: Symbol('resolved'),
  rejected: Symbol('rejected')
}

function Promise(fn) {
  const self = this
  self.value = null
  self.status = status.pending
  self.reason = null
  self.onResolvedCallback = []
  // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  self.onRejectedCallback = []
  // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

  function resolve(value) {
    if (self.status !== status.pending) return

    self.status = status.resolved
    self.value = value

    for (var i = 0; i < self.onResolvedCallback.length; i++) {
      self.onResolvedCallback[i](value)
    }
  }

  function reject(reason) {
    if (self.status !== status.pending) return

    self.status = status.reject
    self.reason = reason

    for (var i = 0; i < self.onRejectedCallback.length; i++) {
      self.onRejectedCallback[i](reason)
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function(onfulfilled, onRejected) {
  const self = this

  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function(v) {
          return v
        }
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function(r) {
          return r
        }

  if (self.status === status.resolved) {
    return new Promise(function(resolve, reject) {
      try {
        var x = onfulfilled(self.data)

        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
  if (self.status === status.rejected) {
    return new Promise(function(resolve, reject) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
  if (self.status === status.pending) {
    self.onResolvedCallback.push(function(value) {
      try {
        var x = onResolved(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(value)
        }
      } catch (e) {
        reject(e)
      }
    })

    self.onRejectedCallback.push(function(reason) {
      try {
        var x = onRejected(self.data)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(value)
        }
      } catch (e) {
        reject(e)
      }
    })
  }
}

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}
```

## links

- [Promise](https://xin-tan.com/passages/2019-11-25-promise-a-plus/#resolve-%E5%92%8C-reject-%E5%AE%9E%E7%8E%B0)
- [Promise](https://github.com/lqt0223/promise)
