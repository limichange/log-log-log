# Reflect

> Unlike most global objects, Reflect is not a constructor. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object).

- Reflect 上面的一些方法并不是专门为对象设计的，比如 Reflect.apply 方法，它的参数是一个函数，如果使用 Object.apply(func)会让人感觉很奇怪。
- 用一个单一的全局对象去存储这些方法，能够保持其它的 JavaScript 代码的整洁、干净。不然的话，这些方法可能是全局的，或者要通过原型来调用。
- 将一些命令式的操作如 delete，in 等使用函数来替代，这样做的目的是为了让代码更加好维护，更容易向下兼容；也避免出现更多的保留字。

## Reflect.apply

## links

- [ES6 Reflect](https://zhuanlan.zhihu.com/p/24778807)
- [Reflect MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
