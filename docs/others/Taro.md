# Test 20200303

## 用自己的理解描述一下 taro 框架整体思路以及各配套设施的作用。

### 整体架构

taro 采取的是重编译轻运行时的思路，通过将 react 语法的代码编译成目标代码，并配合对应的运行时来实现各个平台的适配。本质就是对 react code ast 的转化。事实上对 taro 而言顶层代码是他的 DSL，编译后用来抹平各个平台的差异。

```js
import { Component } from 'taro'

class C extends Component {
  render() {
    const { todo } = this.state
    return <TodoItem id={todo[0].list[123].id} />
  }
}
```

会被编译成

```js
import { Component, internal_safe_get } from 'taro'

class C extends Component {
  $props = {
    TodoItem() {
      return {
        $name: 'TodoItem',
        id: internal_safe_get(this.state, 'todo[0].list[123].id')
      }
    }
  }
}
```

运行时的作用是对二次加工好的代码做平台适配，将 taro API 和平台 API 做连接。

#### 编译

Taro 在这个阶段将 JSX 转换微信小程序模板。也就是分析 render，通过 babel 分析和修改 ast 来生成 wxml。

这部分需要处理 JSX 复杂的表达式，例如将`map`转换成`wx:for`等。目标是什么平台就转成对应的平台代码。

#### 运行时

运行时里的操作包含了 page、component 的创建，state 的转换，映射生命周期，绑定事件等。

### 配套设施

#### 生态

主要是有官方库 TaroUI，提供大部分平台的适配。提供了一个物料市场，来展示第三方组件。

#### taro-cli

这个是主体包。提供了开发、升级、发布等功能。

- 通过 init 下载远程模板来初始化项目。
- 通过 build 构建发布项目。
- 通过 dev 进行实时开发。
- 提供了转化现有小程序为 taro 项目的功能。

#### taro-runtime

包含了各个运行时 `taro-h5` `taro-jd` `taro-qq` 等。

这些运行时就是具体到各自的平台。比如 socket，小程序中用 `wx.connectSocket` 来连接，H5 则用 `new WebSocket()` 来连接。那么这些具体的执行就由这些运行时来处理。

#### postcss

对样式的处理。小程序、web 和 RN 的样式单位有不少差异，统一通过 postcss 来处理。

- `postcss-plugin-constparse`
- `postcss-pxtransform`
- `postcss-unit-transform`

#### plugin

类似于 webpack 的 loader 处理插件

- `taro-plugin-less`
- `taro-plugin-sass`
- `taro-plugin-stylus`
- `taro-plugin-typescript`
- `taro-plugin-uglifyjs`

#### lib

对于第三方库的适配处理

- `taro-redux-h5`
- `taro-mobx-h5`
- `taro-mobx-rn`
- `taro-redux-h5`
- `taro-redux-rn`

#### eslint

eslint 代码校验规则

- `eslint-config-taro`
- `eslint-plugin-taro`

## 举几个你觉得比较经典的，taro 使用过程中的坑。

### 适配不方便

虽然很多人抱着用 taro 一次性适配各个平台的来使用，但实际上适配的难度很大，难以控制。

例如很多组件差异过大，如下拉刷新。在小程序里可以较好的适配，如支付宝小程序和微信小程序。但是如果要输出 H5，就会发现一致性难以保证，因为 web 的执行环境和小程序的环境非常不一致，比如你想配置下拉的样式，发现只能选黑和白。

如果你不小心基于 shadow dom 来做开发，那么你输出到了 web，就会发生一场灾难，因为有的浏览器不支持，或者支持不完善导致执行的期望完全不一致。这样就会导致样式错乱。

路由控制的行为并不一致，因为小程序端有自己 page 生态周期和页面栈和 web 不一样。

taro 不支持 styled-component。

### 生态不丰富

与 RN 和 Flutter 一样的毛病，这类工具只是为你在顶层设计了一个统一的语法，但是具体的底层还是需要原本的本地代码来实现。比如我需要一个图像裁剪插件，这个插件如果想要能用，那么他就得能同时在各个平台的小程序和 H5 上正常运行，还得有方便的配置项。这样好的插件社区里没有几个，除了像 echart 这类有人力的可以推出小程序版，其他的只能自己处理。

就算是作为标杆的 taro-ui，实际使用上也是有巨多问题，难以保证一致性且功能非常有限。例如 upload 组件，为了保证一致性，taro-ui 团队不得不直接就禁用了很多高级功能。而且不支持 RN。

### React 语法受限

taro 使用的是类 react 语法，不是 100%支持，相对于 react 来说会有区别。老版本里甚至只允许我们在 render 里写 jsx，render 函数之外就会报错。目前不支持 HOC 的写法，封装组件会比较麻烦。由于是类 react 语法，所以无法直接使用 react 生态，引入第三方库的时候需要做适当适配。复杂的需要 taro 来适配，比如 mobx，需要引入 taro-mobx。

### ES 语法受限

由于代码是经由 taro 来编译的，所以无法实现一些功能。比如按需加载代码，小程序会有分包的功能，但是由于 taro 的编译处理，会把 web 端都直接扔到 pages。也就是说在 web 端实现渐进式加载比较麻烦，也没法预加载。

### debug 麻烦

sourcemap 功能受限。想要 debug 基本需要 log 和直接查看编译之后的代码。

据官方说 taro next 会有新的编译机制，sourcemap 功能就有了。

### 总结

适合多小程序平台的开发，如果想兼顾 web 和 RN，我建议另开项目。尽量将通用代码发布，各个项目按需引入。

### links

- [A/B Testing Guide](https://vwo.com/ab-testing/)
- [天猫 App A/B 测试实践](https://www.infoq.cn/article/tmall-app-ab-test)
- [Athena-贝壳流量实验平台设计与实践](https://www.jianshu.com/p/79d31a72978f)
- [快速决策方案 —— Airtrack](https://www.infoq.cn/article/fast-decision-scheme-airtrack)
