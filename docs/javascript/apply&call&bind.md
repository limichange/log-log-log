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

```js
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

## bind

bind()方法创建一个新的函数, 当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

## 区别

### call、apply 与 bind 的差别

call 和 apply 改变了函数的 this 上下文后便执行该函数,而 bind 则是返回改变了上下文后的一个函数。

### call、apply 的区别

他们俩之间的差别在于参数的区别，call 和 aplly 的第一个参数都是要改变上下文的对象，而 call 从第二个参数开始以参数列表的形式展现，apply 则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

```js
fn.call(obj, arg1, arg2, arg3...);
fn.apply(obj, [arg1, arg2, arg3...]);
```

## 模拟实现

```js
Function.prototype.apply = function(context, arr) {
  var context = Object(context) || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}
```

```js
Function.prototype.call2 = function(context) {
  var context = context || window
  context.fn = this

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')

  delete context.fn
  return result
}
```

```js
Function.prototype.bind2 = function(context) {
  if (typeof this !== 'function') {
    throw new Error(
      'Function.prototype.bind - what is trying to be bound is not callable'
    )
  }

  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function() {}

  var fbound = function() {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }

  fNOP.prototype = this.prototype
  fbound.prototype = new fNOP()

  return fbound
}
```

## links

- [this、apply、call、bind](https://juejin.im/post/59bfe84351882531b730bac2)
- [js 中 call、apply、bind 那些事](https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more)
- [回味 JS 基础:call apply 与 bind](https://juejin.im/post/57dc97f35bbb50005e5b39bd)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://juejin.im/post/5907eb99570c3500582ca23c)
- [不能使用 call,apply,bind，如何用 js 实现 call 或者 apply 的功能？](https://www.zhihu.com/question/35787390)
- [JavaScript 深入之 bind 的模拟实现](https://juejin.im/post/59093b1fa0bb9f006517b906)
