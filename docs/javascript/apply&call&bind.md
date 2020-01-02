# apply、call、bind

## this

在 es5 中，永远是 this 永远指向最后调用它的那个对象。

改变 this 的指向我总结有以下几种方法：

- 使用 ES6 的箭头函数
- 在函数内部使用 \_this = this
- 使用 apply、call、bind
- new 实例化一个对象

## apply

> The apply() method calls a function with a given this value, and arguments provided as an array

```js
const numbers = [5, 6, 2, 3, 7]

const max = Math.max.apply(null, numbers)

console.log(max)
// expected output: 7

const min = Math.min.apply(null, numbers)

console.log(min)
// expected output: 2
```

## call

## links

- [this、apply、call、bind](https://juejin.im/post/59bfe84351882531b730bac2)
