# Set、WeakSet、Map 及 WeakMap

Set 和 Map 主要的应用场景在于 `数据重组` 和 `数据储存`
Set 是一种叫做`集合`的数据结构，Map 是一种叫做`字典`的数据结构

## Set

ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。

Set 本身是一种构造函数，用来生成 Set 数据结构。

```js
new Set([iterable])

const s = new Set()
[1, 2, 3, 4, 3, 2, 1].forEach(x => s.add(x))

for (let i of s) {
    console.log(i)	// 1 2 3 4
}

// 去重数组的重复对象
let arr = [1, 2, 3, 2, 1, 1]
[... new Set(arr)]	// [1, 2, 3]
```

## WeakSet

WeakSet 对象允许你将弱引用对象储存在一个集合中

### WeakSet 与 Set 的区别

- WeakSet 只能储存对象引用，不能存放值，而 Set 对象都可以
- WeakSet 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的应用，如果没有其他的变量或属性引用这个对象值，则这个对象将会被垃圾回收掉（不考虑该对象还存在于 WeakSet 中），所以，WeakSet 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到了（被垃圾回收了），WeakSet 对象是无法被遍历的（ES6 规定 WeakSet 不可遍历），也没有办法拿到它包含的所有元素

## Map

### 集合 与 字典 的区别

集合 是以 `[value, value]`的形式储存元素，字典 是以 `[key, value]` 的形式储存

## WeakMap

`WeakMap` 对象是一组键值对的集合，其中的键是`弱引用对象`，而值可以是任意。
注意，`WeakMap` 弱引用的只是键名，而不是键值。键值依然是正常引用。
`WeakMap` 中，每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的 key 则变成无效的），所以`WeakMap` 的 key 是不可枚举的。

## 总结

- Set

  - 成员唯一，无序且不重复
  - [value, value]，键值与键名是一致的（或者说只有键值，没有键名）
  - 可以遍历，方法有：add、delete、has

- WeakSet
  - 成员都是对象
  - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏
  - 不能遍历，方法有 add、delete、has
- Map
  - 本质上是键值对的集合，类似集合
  - 可以遍历，方法很多可以跟各种数据格式转换
- WeakMap
  - 只接受对象作为键名（null 除外），不接受其他类型的值作为键名
  - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
  - 不能遍历，方法有 get、set、has、delete

## links

- [Set、WeakSet、Map 及 WeakMap](https://github.com/sisterAn/blog/issues/24)
