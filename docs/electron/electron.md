# electron

Electron 是一个用 HTML，CSS 和 JavaScript 来构建跨平台桌面应用程序的一个开源库

Electron 于 2013 年作为构建 Atom 的框架而被开发出来。这两个项目在 2014 春季开源。 (Atom:为 Github 上可编程的文本编辑器)

Electron 的核心理念是:保持 Electron 的体积小和可持续性开发。
如:为了保持 Electron 的小巧 (文件体积) 和可持续性开发 (以防依赖库和 API 的泛滥) ， Electron 限制了所使用的核心项目的数量。
比如 Electron 只用了 Chromium 的渲染库而不是其全部组件。这使得升级 Chromium 更加容易，但也意味着 Electron 缺少了 Google Chrome 里的一些浏览器相关的特性。 添加到 Electron 的新功能应该主要是原生 API。 如果可以的话，一个功能应该尽可能的成 为一个 Node.js 模块。

## links

- [Electron 构建跨平台应用 Mac/Windows/Linux](https://juejin.im/post/5c46ab47e51d45522b4f55b1)
