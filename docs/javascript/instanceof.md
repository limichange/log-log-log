# instanceof

instanceof 可以检测某个对象是不是另一个对象的实例

```js
Function instanceof Object //true
Object instanceof Function //true
```

```js
var Person = function() {}
var student = new Person()

console.log(student instanceof Person) // true
```

## 原理

查看对象 B 的 prototype 指向的对象是否在对象 A 的`[[prototype]]`链上。如果在，则返回 true,如果不在则返回 false。不过有一个特殊的情况，当对象 B 的 prototype 为 null 将会报错(类似于空指针异常)。

所以一句话理解 instanceof 的运算规则为：

instanceof 检测左侧的 `__proto__` 原型链上，是否存在右侧的 `prototype` 原型。

```js
function _instanceof(A, B) {
  var O = B.prototype // 取B的显示原型
  A = A.__proto__ // 取A的隐式原型
  while (true) {
    //Object.prototype.__proto__ === null
    if (A === null) return false
    if (O === A)
      // 这里重点：当 O 严格等于 A 时，返回 true
      return true
    A = A.__proto__
  }
}
```

## links

- [【前端面试】instanceof 原理](https://juejin.im/post/5b7f64be51882542c83476f0)
- [一张图看懂 Function 和 Object 的关系及简述 instanceof 运算符](https://juejin.im/post/58358606570c35005e4142bd)
