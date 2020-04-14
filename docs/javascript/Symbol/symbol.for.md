# symbol.for

The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.

```js
console.log(Symbol.for('bar') === Symbol.for('bar'))
// expected output: true

console.log(Symbol('bar') === Symbol('bar'))
// expected output: false

const symbol1 = Symbol.for('foo')

console.log(symbol1.toString())
// expected output: "Symbol(foo)"
```

## links

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for
