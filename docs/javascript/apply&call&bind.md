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

## bind

## 区别

### call、apply 与 bind 的差别

call 和 apply 改变了函数的 this 上下文后便执行该函数,而 bind 则是返回改变了上下文后的一个函数。

### call、apply 的区别

他们俩之间的差别在于参数的区别，call 和 aplly 的第一个参数都是要改变上下文的对象，而 call 从第二个参数开始以参数列表的形式展现，apply 则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

## links

- [this、apply、call、bind](https://juejin.im/post/59bfe84351882531b730bac2)
- [js 中 call、apply、bind 那些事](https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more)
- [回味 JS 基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)
