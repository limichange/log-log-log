# Reflect

> Unlike most global objects, Reflect is not a constructor. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object).

- Reflect 上面的一些方法并不是专门为对象设计的，比如 Reflect.apply 方法，它的参数是一个函数，如果使用 Object.apply(func)会让人感觉很奇怪。
- 用一个单一的全局对象去存储这些方法，能够保持其它的 JavaScript 代码的整洁、干净。不然的话，这些方法可能是全局的，或者要通过原型来调用。
- 将一些命令式的操作如 delete，in 等使用函数来替代，这样做的目的是为了让代码更加好维护，更容易向下兼容；也避免出现更多的保留字。

## Reflect.apply

通过指定的参数列表，来调用函数 target。其中，target 就是我们的目标函数，thisArgument 就是 target 函数调用的时候绑定的 this 对象，argumentsList 就是函数的参数列表。这个方法与原来 ES5 的 Function.prototype.apply 类似.

```js
// 查找一个数字数组里面的最大元素
const arr = [1, 3, 5, 7]
let max
// ES6
max = Reflect.apply(Math.max, undefined, arr)
console.log(max) // 7
// ES5
max = Math.max.apply(undefined, arr)
console.log(max) // 7
max = Function.prototype.apply.call(Math.max, undefined, arr)
console.log(max) // 7
```

```js
// 截取字符串的一部分
let str = 'hello, world'
let newStr
// ES6
newStr = Reflect.apply(String.prototype.slice, str, [2, 8])
console.log(newStr) // llo, w
// ES5
newStr = str.slice(2, 8)
console.log(newStr) // llo, w
newStr = String.prototype.slice.apply(str, [2, 8])
console.log(newStr) // llo, w
```

## Reflect.defineProperty

这个方法与 `Object.defineProperty` 相似，不过 `Reflect.defineProperty` 的返回值是一个 `Boolean` 值。`target` 表示要定义属性的对象，`propertyKey` 表示要定义或者修改的属性名字，`attributes` 表示定义或者被修改的属性的属性。

`Reflect.defineProperty` 与 `Object.defineProperty` 的用法是相似的，但是如果 `Object.defineProperty` 的属性定义失败了，就会抛出一个错误，成功的话就会返回这个对象；`Reflect.defineProperty` 如果定义属性失败的话就会返回 `false`，如果成功定义的话，就会返回 `true`。但是如果使用 `Reflect.defineProperty` 函数，它的第一个参数不是对象的话，也会抛出错误。

```js
let obj = {}
// 对象的属性定义失败
try {
  Object.defineProperty(null, 'a', {
    value: 22
  })
} catch (e) {
  console.log('define property failed!')
} // define property failed!

// 使用Object.defineProperty成功的定义
let obj1 = Object.defineProperty(obj, 'name', {
  enumerable: true,
  value: 'dreamapple'
})
console.log(obj) // { name: 'dreamapple' }
console.log(obj1) // { name: 'dreamapple' }

// 这里会返回false 因为我们上面定义name这个属性是不可修改的,
// 然后我们又在这里修改了name属性,所以修改失败返回值为false
let result1 = Reflect.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  value: 'happy'
})
console.log(result1) // false
let result2 = Reflect.defineProperty(obj, 'age', {
  configurable: true,
  enumerable: true,
  value: 22
})
console.log(result2) // true
console.log(obj) // { name: 'dreamapple', age: 22 }
```

## Reflect.deleteProperty

> Reflect.deleteProperty(target, propertyKey)

这个方法用于删除一个对象上的属性，与 `delete` 操作符相似；其中 `target` 表示要操作的对象，`propertyKey` 表示要删除的属性。这个函数的返回值是一个 `Boolean` 值，如果成功的话，返回 `true`.失败的话返回 `false`

```js
let obj = {
  name: 'dreamapple',
  age: 22
}

let r1 = Reflect.deleteProperty(obj, 'name')
console.log(r1) // true
let r2 = Reflect.deleteProperty(obj, 'name')
console.log(r2) // true
let r3 = Reflect.deleteProperty(Object.freeze(obj), 'age')
console.log(r3) // false
```

## Reflect.get

> Reflect.get(target, propertyKey[, receiver])

这个方法用来读取一个对象的属性，target 是目标对象，propertyKey 是我们要读取的属性，receiver 是可选的，如果 propertyKey 的 getter 函数里面有 this 值，那么 receiver 就是这个 this 所代表的上下文。

```js
let obj = {
  name: 'dreamapple',
  age: 22,
  get money() {
    console.log(`I can tell you my name ${this.name}, but not my money`)
    return 0
  }
}
console.log(Reflect.get(obj, 'name')) // dreamapple
console.log(Reflect.get(obj, 'myName')) // undefined
// I can tell you my name dreamapple, but not my money
// 0
console.log(Reflect.get(obj, 'money'))
// I can tell you my name happy, but not my money
// 0
console.log(Reflect.get(obj, 'money', { name: 'happy' }))
```

## Reflect.getOwnPropertyDescriptor

> Reflect.getOwnPropertyDescriptor(target, propertyKey)

这个方法与 Object.getOwnPropertyDescriptor 方法类似，其中 target 是目标对象，propertyKey 是对象的属性，如果这个属性存在属性描述符的话就返回这个属性描述符；如果不存在的话，就返回 undefined

这个方法与 Object.getOwnPropertyDescriptor 有一些不同的地方，如果第一个参数不是对象的话，那么 Object.getOwnPropertyDescriptor 会将这个参数强制转换为对象，而方法 Reflect.getOwnPropertyDescriptor 会抛出一个错误

```js
let obj = {}

Reflect.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'dreamapple'
})

let descriptor = Reflect.getOwnPropertyDescriptor(obj, 'name')
// { value: 'dreamapple',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(descriptor)

let d1 = Reflect.getOwnPropertyDescriptor(obj, 'age')
console.log(d1) // undefined

// 如果第一个参数不是对象
let d2 = Object.getOwnPropertyDescriptor('0', 'name')
console.log(d2) // undefined

try {
  let d3 = Reflect.getOwnPropertyDescriptor('0', 'name')
  console.log(d3)
} catch (e) {
  console.log('error')
} // error
```

## Reflect.getPrototypeOf

> Reflect.getPrototypeOf(target)

这个方法与 Object.getPrototypeOf 方法是一样的，都是返回一个对象的原型，也就是内部的`[[Prototype]]`属性的值。

从上面的结果中，我们可以看到；对于同一个对象，使用 Reflect.getPrototypeOf 方法和使用 Object.getPrototypeOf 方法返回的结果是一致的。这里面还有一些需要注意的事情，如果我们要获取原型的那个值不是一个对象，那么函数 Reflect.getPrototypeOf 会抛出一个异常；对于给定对象的原型，如果没有继承的属性，则返回 null。

```js
// ES5
function A() {}
A.prototype.sayHello = function() {}

var a = new A()
var aPrototype = Object.getPrototypeOf(a)
console.log(aPrototype)
// Object
//  constructor: A()
//  sayHello: ()
//  __proto__: Object

// ES6
let ap = Reflect.getPrototypeOf(a)
console.log(ap)
// Object
//  constructor: A()
//  sayHello: ()
//  __proto__: Object

console.log(ap === aPrototype) // true
```

## Reflect.has

> Reflect.has(target, propertyKey)

这个方法相当于 ES5 的 in 操作符，就是检查一个对象上是否含有特定的属性.

这个函数的返回结果是一个 Boolean 值，如果存在就返回 true，不存在就返回 false。当然如果目标对象(target)不是一个对象，那么就会抛出一个异常。

```js
function A(name) {
  this.name = name || 'dreamapple'
}
A.prototype.getName = function() {
  return this.name
}

var a = new A()

console.log('name' in a) // true
console.log('getName' in a) // true

let r1 = Reflect.has(a, 'name')
let r2 = Reflect.has(a, 'getName')
console.log(r1, r2) // true true
```

## Reflect.isExtensible

> Reflect.isExtensible(target)

这个函数检查一个对象是否是可以扩展的，也就是是否可以添加新的属性；和方法 Object.isExtensible 方法相似。其中，target 表示目标对象，如果这个目标对象不是一个对象，那么函数会抛出一个异常；函数的返回值表示这个对象是否可以扩展；如果是 true，表示这个对象可以扩展，如果是 false，表示这个对象不可以扩展。

```js
let obj = {}
let r1 = Reflect.isExtensible(obj)
console.log(r1) // true
// 密封这个对象
Object.seal(obj)
let r2 = Reflect.isExtensible(obj)
console.log(r2) // false
// 冻结一个对象
let obj1 = Object.freeze({})
let r3 = Reflect.isExtensible(obj1)
console.log(r3) // false
// 阻止一个对象添加新的属性
let obj2 = {}
Object.preventExtensions(obj2)
let r4 = Reflect.isExtensible(obj2)
console.log(r4) // false

// Reflect.isExtensible 与 Object.isExtensible的区别
try {
  Reflect.isExtensible(1)
} catch (e) {
  // 这里捕获错误
  console.log(e) // Reflect.isExtensible called on non-object...
}

try {
  Object.isExtensible(1)
} catch (e) {
  console.log(e)
}
```

当使用 Object.isExtensible 函数时，如果目标对象不是一个对象，那么这个函数会把这个值强制转换成对象，从而不会抛出错误；但是使用 Reflect.isExtensible 方法就会抛出一个错误，因为它要求目标对象必须是一个对象

## Reflect.ownKeys

> Reflect.ownKeys(target)

这个函数的作用是，返回由目标对象自身的属性键组成的数组；其中 target 表示目标对象，如果这个目标对象不是一个对象那么这个函数就会抛出一个异常。这个数组的值等于 Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))

```js
let a = Symbol.for('a')
let b = Symbol.for('b')

let obj = {
  [a]: 10,
  [b]: 20,
  key1: 30,
  key2: 40
}

let arr1 = Object.getOwnPropertyNames(obj)
console.log(arr1) // [ 'key1', 'key2' ]
let arr2 = Object.getOwnPropertySymbols(obj)
console.log(arr2) // [ Symbol(a), Symbol(b) ]
let arr3 = Reflect.ownKeys(obj)
console.log(arr3) // [ 'key1', 'key2', Symbol(a), Symbol(b) ]
```

## Reflect.preventExtensions

> Reflect.preventExtensions(target)

这个方法与 Object.preventExtensions 方法相似，不同的是对于方法 Reflect.preventExtensions，传递的参数必须是一个对象，否则会抛出一个异常；但是对于函数 Object.preventExtensions，如果我们传递的值不是一个对象，那么它会强制把这个值转换成一个对象，所以不会抛出异常。这个函数的作用是，阻止新的属性添加到对象中去。

```js
let obj = {}
let r1 = Reflect.isExtensible(obj)
console.log(r1) // true
Reflect.preventExtensions(obj)
let r2 = Reflect.isExtensible(obj)
console.log(r2) // false
```

## Reflect.set

> Reflect.set(target, propertyKey, value[, receiver])

这个函数的作用是在一个对象身上设置一个属性，其中 target 表示我们要操作的对象；propertyKey 表示我们要设置的属性名，value 表示我们要设置的属性值，receiver 表示的是一个 this 值，如果我们在设置值的时候遇到 setter 函数，那么这个 receiver 值表示的就是 setter 函数中的 this 值。这个函数会返回一个 Boolean 值，表示在目标对象上设置属性是否成功。

```js
let obj = {
  set name(name) {
    console.log('this: --> ', this)
  },
  age: 22
}

let r1 = Reflect.set(obj, 'age', 24)
console.log(r1) // true
console.log(obj) // { name: [Setter], age: 24 }

console.log('\n')
let r2 = Reflect.set(obj, 'name', 'dreamapple', { test: 'test' }) // this: -->  { test: 'test' }
console.log(r2) // true
console.log(obj) // { name: [Setter], age: 24 }
```

## Reflect.setPrototypeOf

> Reflect.setPrototypeOf(target, prototype)

Reflect.setPrototypeOf 与 Object.setPrototypeOf 方法的作用是相似的，设置一个对象的原型，如果设置成功的话，这个对象会返回一个 true；如果设置失败，这个对象会返回一个 false

```js
let obj = {}
let r1 = Reflect.setPrototypeOf(obj, Object.prototype)
console.log(r1) // true
let r2 = Reflect.setPrototypeOf(Object.freeze({}), null)
console.log(r2) // false
```

## links

- [ES6 Reflect](https://zhuanlan.zhihu.com/p/24778807)
- [Reflect MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
