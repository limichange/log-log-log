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

```js
export default function klona(x) {
  if (typeof x !== 'object') return x

  var k,
    tmp,
    str = Object.prototype.toString.call(x)

  if (str === '[object Object]') {
    tmp = {}
    for (k in x) {
      tmp[k] = klona(x[k])
    }
    return tmp
  }

  if (str === '[object Array]') {
    k = x.length
    for (tmp = new Array(k); k--; ) {
      tmp[k] = klona(x[k])
    }
    return tmp
  }

  if (str === '[object Set]') return new Set(x)
  if (str === '[object Date]') return new Date(+x)
  if (str === '[object Map]') return new Map(x)

  if (str === '[object RegExp]') {
    tmp = new RegExp(x.source, x.flags)
    tmp.lastIndex = x.lastIndex
    return tmp
  }

  if (str.slice(-6) === 'Array]') {
    return new x.constructor(x)
  }

  return x
}
```

## https://github.com/lukeed/klona/blob/master/src/index.js

## links

- [deepClone](https://www.30secondsofcode.org/js/s/deep-clone)
- [浅拷贝与深拷贝](https://juejin.im/post/5b5dcf8351882519790c9a2e#heading-9)
- https://github.com/lukeed/klona/blob/master/src/index.js
