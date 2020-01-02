# apply、call、bind

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
