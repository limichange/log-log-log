# strict

ECMAScript 5 的严格模式是采用具有限制性 JavaScript 变体的一种方式，从而使代码显示地 脱离“马虎模式/稀松模式/懒散模式“（sloppy）模式。

- 严格模式不仅仅是一个子集：它的产生是为了形成与正常代码不同的语义。
- 严格模式通过抛出错误来消除了一些原有静默错误
- 严格模式修复了一些导致 JavaScript 引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快
- 严格模式禁用了在 ECMAScript 的未来版本中可能会定义的一些语法
- 在严格模式下, 试图删除不可删除的属性时会抛出异常
- 严格模式禁用 with
- 严格模式禁止删除声明变量

## links

- [MDN Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
