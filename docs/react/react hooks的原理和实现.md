# react hooks 的原理和实现

React Hook 看起来非常 Magic 的实现，本质上还是通过 Array 来实现的。

当调用 useState 的时候，会返回形如 (变量, 函数) 的一个元祖。并且 state 的初始值就是外部调用 useState 的时候，传入的参数。
理清楚了传参和返回值，再来看下 useState 还做了些什么。正如下面代码所示，当点击按钮的时候，执行 setNum，状态 num 被更新，并且 UI 视图更新。显然，useState 返回的用于更改状态的函数，自动调用了 render 方法来触发视图更新。

## links

- [一文彻底搞懂 react hooks 的原理和实现](https://juejin.im/post/5daee8b7e51d4524ce222825)
