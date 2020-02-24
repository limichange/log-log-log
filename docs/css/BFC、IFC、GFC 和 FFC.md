# BFC、IFC、GFC 和 FFC

## BFC

BFC(Block Formatting Contexts)直译为"块级格式化上下文"。Block Formatting Contexts 就是页面上的一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。如何产生 BFC？
float 的值不为 none。

overflow 的值不为 visible。
position 的值不为 relative 和 static。
display 的值为 table-cell, table-caption, inline-block 中的任何一个。
那 BFC 一般有什么用呢？比如常见的多栏布局，结合块级别元素浮动，里面的元素则是在一个相对隔离的环境里运行。

## IFC

IFC(Inline Formatting Contexts)直译为"内联格式化上下文"，IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)
IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同。 IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。
那么 IFC 一般有什么用呢？

水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。

垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

## links

- [小科普：到底什么是 BFC、IFC、GFC 和 FFC](https://juejin.im/entry/5938daf7a0bb9f006b2295db)
