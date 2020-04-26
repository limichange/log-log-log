# Break Foreach

```ts
var list = ['My', 'name', 'is', 'Ben']

list.every(function (elem) {
  console.log(elem) //result: "My","name"
  if (elem === 'name') {
    return false
  }
  return true
})
```

```ts
var list = ['My', 'name', 'is', 'Ben']

list.some(function (elem) {
  console.log(elem) //result: "My","name"
  if (elem === 'name') {
    return true
  }
  return false
})
```

## links

- [How to break when looping an array in Javascript](https://medium.com/@benjamincherion/how-to-break-an-array-in-javascript-6d3a55bd06f6)
