# setTimeout vs setImmediate vs process.nextTick

```js
let racer = function () {
  setTimeout(() => console.log('timeout'), 0)
  setImmediate(() => console.log('immediate'))
  process.nextTick(() => console.log('nextTick'))
  console.log('current event loop')
}

racer()
```

## links

- https://dev.to/logicmason/settimeout-vs-setimmediate-vs-process-nexttick-3lj2

```js
function executeQueue(...args) {
  for (let item of args) {
    item()
  }
}
```
