# babel

> Babel 转化的核心链路：原始代码-原始 AST -转化后的 AST-转化后的代码

## Babel 工作过程

- Parse(解析)：将源代码转换成更加抽象的表示方法（例如抽象语法树）
- Transform(转换)：对（抽象语法树）做一些特殊处理，让它符合编译器的期望
- Generate(代码生成)：将第二步经过转换过的（抽象语法树）生成新的代码

### Parse（解析）

一般来说，Parse 阶段可以细分为两个阶段：`词法分析（Lexical Analysis, LA）`和 `语法分析（Syntactic Analysis, SA）`

#### 词法分析

词法分析阶段可以看成是对代码进行“分词”，它接收一段源代码，然后执行一段 tokenize 函数，把代码分割成被称为 Tokens 的东西。Tokens 是一个数组，由一些代码的碎片组成，比如数字、标点符号、运算符号等等等等，例如这样：

```js
;[
  { 'type': 'Keyword', 'value': 'const' },
  { 'type': 'Identifier', 'value': 'add' },
  { 'type': 'Punctuator', 'value': '=' },
  { 'type': 'Punctuator', 'value': '(' },
  { 'type': 'Identifier', 'value': 'a' },
  { 'type': 'Punctuator', 'value': ',' },
  { 'type': 'Identifier', 'value': 'b' },
  { 'type': 'Punctuator', 'value': ')' },
  { 'type': 'Punctuator', 'value': '=>' },
  { 'type': 'Identifier', 'value': 'a' },
  { 'type': 'Punctuator', 'value': '+' },
  { 'type': 'Identifier', 'value': 'b' }
]
```

#### 语法分析

词法分析之后，代码就已经变成了一个 `Tokens` 数组了，现在需要通过语法分析把 `Tokens` 转化为上面提到过的 `AST`

### Transform(转换)

这一步做的事情也很简单，就是操作 `AST`。

`Identifier`节点

```js
{
    type: 'Identifier',
    name: 'add'
}
```

`Babel` 会维护一个称作 `Visitor` 的对象，这个对象定义了用于 `AST` 中获取具体节点的方法。

### Generate(代码生成)

经过上面两个阶段，需要转译的代码已经经过转换，生成新的 AST 了，最后一个阶段理所应当就是根据这个 AST 来输出代码。

## @babel/preset-stage-xxx

@babel/preset-stage-xxx 是 ES 在不同阶段语法提案的转码规则而产生的预设，随着被批准为 ES 新版本的组成部分而进行相应的改变（例如 ES6/ES2015）。

提案分为以下几个阶段：

stage-0 - 设想（Strawman）：只是一个想法，可能有 Babel 插件，stage-0 的功能范围最广大，包含 stage-1 , stage-2 以及 stage-3 的所有功能
stage-1 - 建议（Proposal）：这是值得跟进的
stage-2 - 草案（Draft）：初始规范
stage-3 - 候选（Candidate）：完成规范并在浏览器上初步实现
stage-4 - 完成（Finished）：将添加到下一个年度版本发布中

## useBuiltIns

回过头来再说 @babel/preset-env，他出现的目的就是实现民族大统一，连 stage-x 都干掉了，又怎么会漏掉 Polyfill 这一功能，在 @babel/preset-env 的配置项中提供了 useBuiltIns 这一参数，只要在使用 @babel/preset-env 的时候带上他，Babel 在编译的时候就会自动进行 Polyfill ，不再需要手动的在代码中引入@babel/polyfill 了，同时还能做到按需加载

## links

- [初学 Babel 工作原理](https://juejin.im/post/5d11d797f265da1bd305676b)
- [创心-第 14 届 D2 参会总结](https://juejin.im/post/5df8cd9ce51d455807699031)
- [astexplorer](https://astexplorer.net/)
- [从 babel 讲到 AST](https://juejin.im/post/5ab35c3cf265da23771951a2)
- [掌握了 AST，再也不怕被问 babel，vue 编译，Prettier 等原理](https://juejin.im/post/5debce5d518825127f0845bd#heading-7)
- [你真的会用 Babel 吗?](https://juejin.im/post/59b9ffa8f265da06710d8e89)
