# new 的过程

TODO

```js
function newObject(func) {
  let n = Object.create(func.prototype)
  n.constructor = func.bind(n)
  n.constructor()
  return n
}

newObject(function () {})
```
