# async/await

async / await 是一种更方便地完成异步调用的语法

## 基本含义

async 使得后面的 function 始终返回一个 promise，无论 function 本身返回的是否是 promise。

await 必须在 async 函数内部使用，只有等到 await 后面的部分执行完成后，函数才会继续往下执行。

## 基本原理

async / await 本质上是 generator 的语法糖，与 generator 相比，多了以下几个特性：

内置执行器，无需手动执行 next() 方法

await 后面的函数可以是 promise 对象也可以是普通 function，而 yield 关键字后面必须得是 thunk 函数或 promise 对象

```js
async function fn(args) {
  // ...
}
```

等同于

```js
function fn(args) {
  return spawn(function*() {
    // ...
  })
}
```

spawn 就是自动执行器

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

- [今日头条： 对 async/await 的理解以及内部原理（一面](https://github.com/frontend9/fe9-interview/issues/6)
