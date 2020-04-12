# setTimeout vs setImmediate vs process.nextTick

```js
let racer = function () {
  setTimeout(() => console.log('timeout'), 0)
  setImmediate(() => console.log('immediate'))
  process.nextTick(() => console.log('nextTick'))
  console.log('current event loop')
}

racer()

// current event loop
// nextTick
// timeout
// immediate
```

We can see from the output that these callbacks aren't executed in the same order they were written in the source code.

## links

- https://dev.to/logicmason/settimeout-vs-setimmediate-vs-process-nexttick-3lj2
