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

## links

- [初学 Babel 工作原理](https://juejin.im/post/5d11d797f265da1bd305676b)
- [创心-第 14 届 D2 参会总结](https://juejin.im/post/5df8cd9ce51d455807699031)
- [astexplorer](https://astexplorer.net/)
- [从 babel 讲到 AST](https://juejin.im/post/5ab35c3cf265da23771951a2)
- [掌握了 AST，再也不怕被问 babel，vue 编译，Prettier 等原理](https://juejin.im/post/5debce5d518825127f0845bd#heading-7)
- [你真的会用 Babel 吗?](https://juejin.im/post/59b9ffa8f265da06710d8e89)
