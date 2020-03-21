# SSR

app.js 入口文件

app.js 是我们的通用 entry，它的作用就是构建一个 Vue 的实例以供服务端和客户端使用，注意一下，在纯客户端的程序中我们的 app.js 将会挂载实例到 dom 中，而在 ssr 中这一部分的功能放到了 Client entry 中去做了。
两个 entry 接下里我们来看 Client entry 和 Server entry，这两者分别是客户端的入口和服务端的入口。

Client entry 的功能很简单，就是挂载我们的 Vue 实例到指定的 dom 元素上；Server entry 是一个使用 export 导出的函数。主要负责调用组件内定义的获取数据的方法，获取到 SSR 渲染所需数据，并存储到上下文环境中。这个函数会在每一次的渲染中重复的调用。

用户请求服务器，服务器上直接生成 HTML 内容并返回给浏览器。服务器端渲染来，页面的内容是由 Server 端生成的。一般来说，服务器端渲染的页面交互能力有限，如果要实现复杂交互，还是要通过引入 JavaScript 文件来辅助实现。服务器端渲染这个概念，适用于任何后端语言。

接下里我们来看 Client entry 和 Server entry，这两者分别是客户端的入口和服务端的入口。Client entry 的功能很简单，就是挂载我们的 Vue 实例到指定的 dom 元素上；Server entry 是一个使用 export 导出的函数。主要负责调用组件内定义的获取数据的方法，获取到 SSR 渲染所需数据，并存储到上下文环境中。这个函数会在每一次的渲染中重复的调用。

## links

- [Vue SSR 构建流程](https://juejin.im/post/5b063962f265da0ddb63dac3)
- [React 中同构（SSR）原理脉络梳理](https://juejin.im/post/5bc7ea48e51d450e46289eab)
