# prototype

> Each object has a private property which holds a link to another object called its prototype.

- 每一个构造函数都拥有一个 `prototype` 属性，这个属性指向一个对象，也就是原型对象。当使用这个构造函数创建实例的时候，`prototype` 属性指向的原型对象就成为实例的原型对象。
- 原型对象默认拥有一个 `constructor` 属性，指向指向它的那个构造函数（也就是说构造函数和原型对象是互相指向的关系）。
- 每个对象都拥有一个隐藏的属性`[[prototype]]`，指向它的原型对象，这个属性可以通过 `Object.getPrototypeOf(obj)` 或 `obj.__proto__` 来访问。
- 实际上，构造函数的 `prototype` 属性与它创建的实例对象的`[[prototype]]`属性指向的是同一个对象，`对象.__proto__ === 函数.prototype`
- 如上文所述，原型对象就是用来存放实例中共有的那部分属性
- 在 `JavaScript` 中，所有的对象都是由它的原型对象继承而来，反之，所有的对象都可以作为原型对象存在。
- 访问对象的属性时，`JavaScript` 会首先在对象自身的属性内查找，若没有找到，则会跳转到该对象的原型对象中查找。

所有原型链的终点都是 `Object` 函数的 prototype 属性

当谈到继承时，JavaScript 只有一种结构：对象。每个实例对象（ object ）都有一个私有属性（称之为 `__proto__` ）指向它的构造函数的原型对象（`prototype`）。该原型对象也有一个自己的原型对象( `__proto__` ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

还有人觉得我的分析很抽象，所以，我再总结一下，如果要一句话理解 JS 中的原型是什么，那就是，对象的原型就指的对象的父对象。每个对象都有父对象，父对象本身也有父对象（爷对象？）。而原型链呢，很像过去家谱的概念，可以从你往上追溯你父亲，到爷爷，到太爷爷一直到头，这就形成了一个链条，如果其中每个人都比作一个对象，那么这个链条就是原型链。

因此，当你执行：

```js
var o = new Foo()
```

JavaScript 实际上执行的是：

```js
var o = new Object()
o.__proto__ = Foo.prototype
Foo.call(o)
```

然后，当你执行：

```js
o.someProp
```

它检查 o 是否具有 someProp 属性。如果没有，它会查找 Object.getPrototypeOf(o).someProp，如果仍旧没有，它会继续查找 Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp。

## links

- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [三分钟看完 JavaScript 原型与原型链](https://juejin.im/post/5a94c0de5188257a8929d837)
- [2019 面试准备 - JS 原型与原型链](https://juejin.im/post/5c72a1766fb9a049ea3993e6)
- [三张图搞懂 JavaScript 的原型对象与原型链](https://juejin.im/post/5835853f570c35005e413b19)
