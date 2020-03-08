# ES7、ES8、ES9、ES10 新特性

## ES7

Array.prototype.includes()方法

indexOf()

find() 和 findIndex()

求幂运算符\*\*

## ES8

Async/Await

async 是一个通过异步执行并隐式返回 Promise 作为结果的函数。

Object.values()，Object.entries()

String.padStart(targetLength,[padString])

## ES9

### for await of

```js
async function test() {
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for await (let item of arr) {
    console.log(Date.now(), item)
  }
}
```

### Object Rest Spread

## ES10

### Array.prototype.includes()方法

Promise.prototype.finally()

## links

- [ES7、ES8、ES9、ES10 新特性](https://mp.weixin.qq.com/s/imcOWdQ9GdXViHUXMmyinw)
