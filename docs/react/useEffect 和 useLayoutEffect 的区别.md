# useEffect 和 useLayoutEffect 的区别

useLayoutEffect 的作用和 useEffect 几乎差不多，你把你现有代码的 useEffect 全部替换成 useLayoutEffect，你几乎看不到任何差别。

相比使用 useEffect，当你点击 div，count 更新为 0，此时页面并不会渲染，而是等待 useLayoutEffect 内部状态修改后，才会去更新页面，所以页面不会闪烁。

## 总结

- useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。
- useEffect 可以满足百分之 99 的场景，而且 useLayoutEffect 会阻塞渲染，请谨慎使用。

## links

-[useEffect 和 useLayoutEffect 的区别](https://juejin.im/post/5de38c76e51d455f9b335eff)
