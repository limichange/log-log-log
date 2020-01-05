# 柯里化

```js
var curry = fn => {
  return function judge (...args) {
    return args.length === fn.length
      ? fn(...args)
      : arg => {
          return judge(...args, arg)
        }
  })
}

fn('a', 'b')('c') // ["a", "b", "c"]

var fn = curry(function(a, b, c) {
  console.log([a, b, c])
})
```

```js
const curry = (fn, arity = fn.length, ...args) => {
  return arity <= args.length
    ? fn(...args)
    : curry.bind(null, fn, arity, ...args)
}

curry(Math.pow)(2)(10) // 1024
curry(Math.min, 3)(10)(50)(2) // 2
```

## links

- [curry](https://www.30secondsofcode.org/js/s/curry)
- [JavaScript 专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)

```js
function curry(fn, fnArgL = fn.length, ...args) {
  return args.length >= fnArgL
    ? fn(...args)
    ? curry.bind(null, fn, fnArgL, ...args)
}
```

```js
function debounce(fn, ms) {
  let timeId

  return function(...args) {
    clearTimeout(timeId)
    timeId = window.setTimeout(() => {
      fn.apply(this, args)
    }, ms)
  }
}
```
