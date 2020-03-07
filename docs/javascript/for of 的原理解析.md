# for of 的原理解析

这里的所有数据结构只指具有 iterator 接口的数据。一个数据只要部署了 Symbol.iterator，就具有了 iterator 接口，就可以使用 for...of 循环遍历它的成员。也就是说，for...of 循环内部调用的数据结构为 Symbol.iterator 方法。

## 为什么引入 Iterator

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。通俗点理解就是为了解决不同数据结构遍历的问题，引入了 Iterator.

## links

- [for of 的原理解析](https://segmentfault.com/a/1190000021928563)
