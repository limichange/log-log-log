# deepClone

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } }
// a!==b
// a.obj !==b.obj
const b = deepClone(a)
```

```js
const isObject = obj => typeof obj === 'object'
const isArray = array => Array.isArray(array)

const deepClone = obj => {
  let newObj = Object.create(null)

  if (isObject(obj)) {
    newObj = {}
  } else if (isArray(obj)) {
    newObj = []
  } else {
    return obj
  }

  for (let key in obj) {
    let value = obj[key]

    if (isObject(value) || isArray(value)) {
      newObj[key] = deepClone(value)
    } else {
      newObj[key] = value
    }
  }

  return newObj
}
```

## links

- [deepClone](https://www.30secondsofcode.org/js/s/deep-clone)
- [浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-9)
