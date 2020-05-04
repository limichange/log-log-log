# async-iterables

```ts
const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false })
        }

        return Promise.resolve({ done: true })
      },
    }
  },
}

;(async function () {
  for await (let num of asyncIterables) {
    console.log(num)
  }
})()
```

## links

- [for-await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)
