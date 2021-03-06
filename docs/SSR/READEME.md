# SSR

## 原理

服务端只负责首次“渲染”（真正意义上，只有浏览器才能渲染页面，服务端其实是生成 HTML 内容），然后返回给客户端，客户端接管页面交互（事件绑定等逻辑），之后客户端路由切换时，直接通过 JS 代码来显示对应的内容，不再需要服务端渲染（只有页面刷新时会需要）

SSR 的工程中，React 代码会在客户端和服务器端各执行一次。你可能会想，这没什么问题，都是 JavaScript 代码，既可以在浏览器上运行，又可以在 Node 环境下运行。但事实并非如此，如果你的 React 代码里，存在直接操作 DOM 的代码，那么就无法实现 SSR 这种技术了，因为在 Node 环境下，是没有 DOM 这个概念存在的，所以这些代码在 Node 环境下是会报错的。
好在 React 框架中引入了一个概念叫做虚拟 DOM，虚拟 DOM 是真实 DOM 的一个 JavaScript 对象映射，React 在做页面操作时，实际上不是直接操作 DOM，而是操作虚拟 DOM，也就是操作普通的 JavaScript 对象，这就使得 SSR 成为了可能。在服务器，我可以操作 JavaScript 对象，判断环境是服务器环境，我们把虚拟 DOM 映射成字符串输出；在客户端，我也可以操作 JavaScript 对象，判断环境是客户端环境，我就直接将虚拟 DOM 映射成真实 DOM，完成页面挂载。
其他的一些框架，比如 Vue，它能够实现 SSR 也是因为引入了和 React 中一样的虚拟 DOM 技术。

## SSR 的优点

### 更利于 SEO

不同爬虫工作原理类似，只会爬取源码，不会执行网站的任何脚本（Google 除外，据说 Googlebot 可以运行 javaScript）。使用了 Vue 或者其它 MVVM 框架之后，页面大多数 DOM 元素都是在客户端根据 js 动态生成，可供爬虫抓取分析的内容大大减少。另外，浏览器爬虫不会等待我们的数据完成之后再去抓取我们的页面数据。服务端渲染返回给客户端的是已经获取了异步数据并执行 JavaScript 脚本的最终 HTML，网络爬中就可以抓取到完整页面的信息。

### 更利于首屏渲染

首屏的渲染是 node 发送过来的 html 字符串，并不依赖于 js 文件了，这就会使用户更快的看到页面的内容。尤其是针对大型单页应用，打包后文件体积比较大，普通客户端渲染加载所有所需文件时间较长，首页就会有一个很长的白屏等待时间。

## SSR 的局限

### 服务端压力较大

本来是通过客户端完成渲染，现在统一到服务端 node 服务去做。尤其是高并发访问的情况，会大量占用服务端 CPU 资源

### 开发条件受限

在服务端渲染中，created 和 beforeCreate 之外的生命周期钩子不可用，因此项目引用的第三方的库也不可用其它生命周期钩子，这对引用库的选择产生了很大的限制

### 学习成本相对较高

除了对 webpack、Vue 要熟悉，还需要掌握 node、Express 相关技术。相对于客户端渲染，项目构建、部署过程更加复杂

### 维护困难

报错的排查和统计变得困难，不方便定位出错的问题。尤其是内存泄漏等问题十分的难受

## links

- [解密 Vue SSR](https://juejin.im/post/5b063962f265da0ddb63dac3)
- [React SSR 详解【近 1W 字】+ 2 个项目实战](https://juejin.im/post/5def0816f265da33aa6aa7fe)
