# Deep Vue3 No.1

> 深入浅出，全面了解 vue3

我们主要以大致掌握总流程为目的，所以我会省略一些不太重要的东西，比如 vue3 是如何 build 的。整个过程我希望并不会一股脑的把知识全部倒出来，更倾向于一种交谈的感觉，所以请抱着轻松的心情来看。

## 预备的知识

首先，请确保有以下技术的一些基础。

- Vue2
- TypeScript
- JavaScript
- ES6+

当然不需要精通这些知识，有一些不太常用的函数或者变量我会标记出来，在相应的地方放上相关的知识链接，方便大家查阅。

## 提前准备

如果不打算本地看代码的话可以跳过这步。

安装以下工具

- NodeJs 10+
- Git
- Yarn

用 git 把代码下载到本地。

```bash
git clone git@github.com:vuejs/vue-next.git
```

然后使用 Yarn 安装依赖。
如果没有问题，我们现在可以用自己喜欢的编辑器来查看代码了。

## 项目结构

此时，我们已经做好了上面说的准备工作，很棒，那么可以正式开始了。

我们抛开项目里的辅助工具，一些代码格式化之类的配置，直接看一下项目里的 package。当然我们也可以直接看[官方的介绍](./contributing.md)，由你决定。

你可能已经注意到了下面的列表，看起来很多。但不要担心，我们可以由浅入深慢慢了解，并不需要一股脑的全部记下来，目前只要大致了解下即可。

- `reactivity`: vue3 的新核心，也就是 Proxy 实现的新的响应系统，可以独立的在框架之外使用。我们后面会先来看这个地方。

- `runtime-core`: 运行时核心。包含了 virtual dom 渲染、component 的实现和一些 API。其他运行时会在这个基础上进行进一步的实现。

- `runtime-dom`: 浏览器运行时。包含了对浏览器原生 DOM API、属性、事件等的处理。

- `runtime-test`: 测试运行时。可以被运行在任何一个 JavaScript 环境，提供了很多方法用于 test。

- `server-renderer`: SSR (server-side rendering) 的实现。

- `compiler-core`: 编译器核心。提供了编译所需的大部分功能。

- `compiler-dom`: 对浏览器环境的编译实现。

- `compiler-sfc`: SFC (single file components) 编译模块。提供了一些 API 帮助你把单文件组件转换成 JavaScript 代码。

- `compiler-ssr`: 对 SSR 的编译实现。

- `template-explorer`: 这是一个[编译浏览器][1]。可以直接查看编译器的编译效果，用于方便调试。

- `shared`: 不止是一个 utils 集合，这个 package 是包含了上述 package 的共有代码，方便复用逻辑。

- `size-check`: 用于检查 vue 的代码大小。

- `vue`: vue 的总入口，包含了 runtime 和 compiler 的实现，也就是引入了上述的 package。

```
                      +---------------------+
                      |                     |
                      |  @vue/compiler-sfc  |
                      |                     |
                      +-----+--------+------+
                            |        |
                            v        v
           +-------------------+   +--------------------+
           |                   |   |                    |
    +----->| @vue/compiler-dom +-->| @vue/compiler-core |
    |      |                   |   |                    |
+---+---+  +-------------------+   +--------------------+
|       |
|  vue  |
|       |
+---+---+  +-------------------+   +--------------------+   +-----------------+
    |      |                   |   |                    |   |                 |
    +----->|  @vue/runtime-dom +-->| @vue/runtime-core  +-->| @vue/reactivity |
           |                   |   |                    |   |                 |
           +-------------------+   +--------------------+   +-----------------+
```

## links

- [Design Principles of Vue 3.0 by Evan You](https://www.youtube.com/watch?v=WLpLYhnGqPA)
- [Vue Github Code](https://github.com/vuejs/vue-next)

[1]: https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%3Cdiv%3E%7B%7Ba%2B1%7D%7D%3C%2Fdiv%3E%22%2C%22ssr%22%3Afalse%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22prefixIdentifiers%22%3Afalse%2C%22optimizeBindings%22%3Atrue%2C%22hoistStatic%22%3Afalse%2C%22cacheHandlers%22%3Afalse%2C%22scopeId%22%3Anull%7D%7D
