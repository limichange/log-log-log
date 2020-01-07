# useEffect 和 useLayoutEffect 的区别

useLayoutEffect 的作用和 useEffect 几乎差不多，你把你现有代码的 useEffect 全部替换成 useLayoutEffect，你几乎看不到任何差别。

相比使用 useEffect，当你点击 div，count 更新为 0，此时页面并不会渲染，而是等待 useLayoutEffect 内部状态修改后，才会去更新页面，所以页面不会闪烁。

## 总结

- useLayoutEffect 相比 useEffect，通过同步执行状态更新可解决一些特性场景下的页面闪烁问题。
- useEffect 可以满足百分之 99 的场景，而且 useLayoutEffect 会阻塞渲染，请谨慎使用。

## other

- useEffect 在全部渲染完毕后才会执行
- useLayoutEffect 会在 浏览器 layout 之后，painting 之前执行
- 其函数签名与 useEffect 相同，但它会在所有的 DOM 变更之后同步调用 effect
- 可以使用它来读取 DOM 布局并同步触发重渲染
- 尽可能使用标准的 useEffect 以避免阻塞视图更新

## links

-[useEffect 和 useLayoutEffect 的区别](https://juejin.im/post/5de38c76e51d455f9b335eff)
