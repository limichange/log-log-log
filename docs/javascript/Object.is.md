# Object.is

```js
if (!Object.is) {
  Object.is = function(x, y) {
    if (x === y) {
      // Step 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y
    } else {
      // Step 6.a: NaN == NaN
      return (x !== x) & (y !== y)
    }
  }
}
```

## links

- [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
