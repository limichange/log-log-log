# 如何遍历一个 dom 树

```js
function traversal(node) {
  //对node的处理
  if (node && node.nodeType === 1) {
    console.log(node.tagName)
  }
  var i = 0,
    childNodes = node.childNodes,
    item
  for (; i < childNodes.length; i++) {
    item = childNodes[i]
    if (item.nodeType === 1) {
      //递归先序遍历子节点
      traversal(item)
    }
  }
}
```

## links

- [第 2 题：如何遍历一个 dom 树](https://juejin.im/post/5ca9de22e51d452b5372ed90)
