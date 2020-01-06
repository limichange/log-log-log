# Symbol

```js
var generateName = (function() {
  var postfix = 0
  return function(descString) {
    postfix++
    return '@@' + descString + '_' + postfix
  }
})()

function Symbol(description) {
  // 实现特性第 2 点：Symbol 函数前不能使用 new 命令
  if (this instanceof Symbol) throw new TypeError('Symbol is not a constructor')

  // 实现特性第 5 点：如果 Symbol 的参数是一个对象，就会调用该对象的 toString 方法，将其转为字符串，然后才生成一个 Symbol 值。
  var descString = description === undefined ? undefined : String(description)

  var symbol = Object.create({
    // Symbol 值可以显式转为字符串
    toString: function() {
      return 'Symbol(' + this.__Description__ + ')'
    }
  })

  Object.defineProperties(symbol, {
    '__Description__': {
      value: descString,
      writable: false,
      enumerable: false,
      configurable: false
    },
    // Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性
    '__Name__': {
      value: generateName(descString),
      writable: false,
      enumerable: false,
      configurable: false
    }
  })

  return symbol
}
```

## links

- [ES6 系列之模拟实现 Symbol 类型](https://juejin.im/post/5b1f4c21f265da6e0f70bb19)
