# BFC

> 块格式化上下文（Block Formatting Context，BFC）

它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。

文档流 影响的是这个元素的排列顺序
BFC 影响的是这个元素的宽高

- `根元素(<html>)`
- `浮动元素（元素的 float 不是 none）`
- `绝对定位元素（元素的 position 为 absolute 或 fixed）`
- `行内块元素（元素的 display 为 inline-block）`
- 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- `overflow 值不为 visible 的块元素`
- display 值为 flow-root 的元素
- contain 值为 layout、content 或 paint 的元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
- column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
https://segmentfault.com/a/1190000019760531
