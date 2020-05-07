# symbol-properties

## Symbol.asyncIterator

The Symbol.asyncIterator will-known symbol specifies the default AsyncIterator for an object. If this property is set on an object, it is an async iterable and can be used in a `for await ...of` loop.

```ts
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 'hello'
    yield 'async'
    yield 'iteration!'
  },
}

;(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x)
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})()
```

## Symbol.hasInstance

static Symbol.hasInstance is called by `instanceof`. The instanceof operator's behavior can be customized by this symbol.

```ts
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance)
  }
}

console.log([] instanceof Array1)
// expected output: true
```

## Symbol.isConcatSpreadable

The `Symbol.isConcatSpreadable` well-known symbol is used to configure if an object should be flattened to its array elements when using the `Array.prototype.concat()`.

```ts
const alpha = ['a', 'b', 'c']
const numeric = [1, 2, 3]
let alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)
// expected output: Array ["a", "b", "c", 1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false
alphaNumeric = alpha.concat(numeric)

console.log(alphaNumeric)
// expected output: Array ["a", "b", "c", Array [1, 2, 3]]
```

## Symbol.iterator

The well-known `Symbol.iterator` symbol specifies the default iterator for an object. Used by `for...of`.

```ts
const iterable1 = {}

iterable1[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}

console.log([...iterable1])
// expected output: Array [1, 2, 3]
```

## Symbol.toStringTag

The `Symbol.toStringTag` will-known symbol is a string valued property that is used in the creation of the default string description of an object. It is accessed internally by the `Object.prototype.toString()` method.

```ts
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'Validator'
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()))
```

## Symbol.toPrimitive

The `Symbol.toPrimitive` is a symbol that specifies a function valued property that is called to convert an object to corresponding perimitive value.

```ts
const object = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 42
    }

    return null
  },
}

console.log(+object)

// expected output: 42
```

## Symbol.species

The well-known symbol Symbol.species specifies a function-valued property that the constructor function uses to create derived objects.

```ts
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array
  }
}

const a = new Array1(1, 2, 3)
const mapped = a.map((x) => x * x)

console.log(mapped instanceof Array1)
// expected output: false

console.log(mapped instanceof Array)
// expected output: true
```

## links

- [Symbol.prototype.description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)
