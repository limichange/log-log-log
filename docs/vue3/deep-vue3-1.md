# Deep Vue3 No.1

> 深入源码，全面了解 vue3。

<!-- 花了 2 天把 vue3 最新版的代码看完了，有些收获，希望分享给大家。 -->

我们主要以大致掌握总流程为目的，所以我会省略一些不太重要的东西，比如 vue3 是如何 build 的。整个过程我希望并不会一股脑的把知识全部倒出来，更喜欢是一种交谈的感觉。

## 预备的知识

首先，请确保有以下技术的一些基础。

- Vue2
- TypeScript
- JavaScript
- ES6+

当然不需要精通这些知识，有一些不太常用的函数或者变量我会标记出来，方便大家查阅。

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

你可能已经注意到了下面的列表，看起来很多。但不要担心，我们可以由浅入深慢慢了解，并不需要一股脑的全部记下来。

- `reactivity`
  reactivity: The reactivity system. It can be used standalone as a framework-agnostic package.

- runtime-core: The platform-agnostic runtime core. Includes code for the virtual dom renderer, component implementation and JavaScript APIs. Higher-order runtimes (i.e. custom renderers) targeting specific platforms can be created using this package.

- runtime-dom: The runtime targeting the browser. Includes handling of native DOM API, attributes, properties, event handlers etc.

- runtime-test: The lightweight runtime for testing. Can be used in any JavaScript environment since it "renders" a tree of plain JavaScript objects. The tree can be used to assert correct render output. Also provides utilities for serializing the tree, triggering events, and recording actual node operations performed during an update.

- server-renderer: Package for server-side rendering.

- compiler-core: The platform-agnostic compiler core. Includes the extensible base of the compiler and all platform-agnostic plugins.

- compiler-dom: Compiler with additional plugins specifically targeting the browser.

- compiler-ssr: Compiler that produces render functions optimized for server-side rendering.

- template-explorer: A development tool for debugging compiler output. You can run yarn dev template-explorer and open its index.html to get a repl of template compilation based on current source code.

A live version of the template explorer is also available, which can be used for providing reproductions for compiler bugs. You can also pick the deployment for a specific commit from the deploy logs.

- shared: Internal utilities shared across multiple packages (especially environment-agnostic utils used by both runtime and compiler packages).

- vue: The public facing "full build" which includes both the runtime AND the compiler.

```
                                    +---------------------+
                                    |                     |
                                    |  @vue/compiler-sfc  |
                                    |                     |
                                    +-----+--------+------+
                                          |        |
                                          v        v
                      +---------------------+    +----------------------+
                      |                     |    |                      |
        +------------>|  @vue/compiler-dom  +--->|  @vue/compiler-core  |
        |             |                     |    |                      |
   +----+----+        +---------------------+    +----------------------+
   |         |
   |   vue   |
   |         |
   +----+----+        +---------------------+    +----------------------+    +-------------------+
        |             |                     |    |                      |    |                   |
        +------------>|  @vue/runtime-dom   +--->|  @vue/runtime-core   +--->|  @vue/reactivity  |
                      |                     |    |                      |    |                   |
                      +---------------------+    +----------------------+    +-------------------+
```

## links

- [Design Principles of Vue 3.0 by Evan You](https://www.youtube.com/watch?v=WLpLYhnGqPA)
- [Vue Github Code](https://github.com/vuejs/vue-next)
