# virtual dom

## 为什么需要 Virtual Dom

为了有效解决 DOM 更新开销的问题，采用了 Virtual DOM 的思路

而 VirtualDOM 的主要思想就是模拟 DOM 的树状结构，在内存中创建保存映射 DOM 信息的节点数据，在由于交互等因素需要视图更新时，先通过对节点数据进行 diff 后得到差异结果后，再一次性对 DOM 进行批量更新操作

## links

- [深入框架本源系列 —— Virtual Dom](https://juejin.im/post/5b10dd36e51d4506e04cf802)
