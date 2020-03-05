# flex

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。

```css
div {
  flex-direction: ;
  justify-content: ;
  flex-flow: ;
  align-items: ;
  align-content: ;
}
```

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}

.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}

.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}

/* flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。*/

.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}

.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}

.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。
align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

## links

- [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
