# array

## Array 构造器

```js
// 使用Array构造器
var a = Array(8) // [undefined × 8]
// 使用对象字面量
var b = []
b.length = 8 // [undefined × 8]
```

## Array.of

它基本上与 Array 构造器功能一致，唯一的区别就在单个数字参数的处理上

```js
Array.of(8.0) // [8]
Array(8.0) // [empty × 8]
```

```js
Array.of(8.0, 5) // [8, 5]
Array(8.0, 5) // [8, 5]

Array.of('8') // ["8"]
Array('8') // ["8"]
```

## Array.from

只要一个对象有迭代器，Array.from 就能把它变成一个数组（当然，是返回新的数组，不改变原对象）。

```js
var obj = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
Array.from(
  obj,
  function(value, index) {
    console.log(value, index, this, arguments.length)
    return value.repeat(3) //必须指定返回值，否则返回undefined
  },
  obj
)
```

## pop

pop() 方法删除一个数组中的最后的一个元素，并且返回这个元素。如果是栈的话，这个过程就是栈顶弹出。

## push

push()方法添加一个或者多个元素到数组末尾，并且返回数组新的长度。如果是栈的话，这个过程就是栈顶压入。

## reverse

reverse()方法颠倒数组中元素的位置，第一个会成为最后一个，最后一个会成为第一个，该方法返回对数组的引用。

## shift

shift()方法删除数组的第一个元素，并返回这个元素。如果是栈的话，这个过程就是栈底弹出。

## sort

- 若 comparefn(a, b) < 0，那么 a 将排到 b 前面；
- 若 comparefn(a, b) = 0，那么 a 和 b 相对位置不变；
- 若 comparefn(a, b) > 0，那么 a , b 将调换位置；

## splice

splice()方法用新元素替换旧元素的方式来修改数组。它是一个常用的方法，复杂的数组操作场景通常都会有它的身影，特别是需要维持原数组引用时，就地删除或者新增元素，splice 是最适合的。

`arr.splice(start,deleteCount[, item1[, item2[, …]]])`

## unshift

unshift() 方法用于在数组开始处插入一些元素(就像是栈底插入)，并返回数组新的长度。

## fill(ES6)

```js
var array = [1, 2, 3, 4, 5]
var array2 = array.fill(10, 0, 3)
// true [10, 10, 10, 4, 5], 可见数组区间[0,3]的元素全部替换为10
console.log(array === array2, array2)
```

## concat

concat() 方法将传入的数组或者元素与原数组合并，组成一个新的数组并返回。

## join

join() 方法将数组中的所有元素连接成一个字符串。

## slice

slice() 方法将数组中一部分元素浅复制存入新的数组对象，并且返回这个数组对象。

`语法：arr.slice([start[, end]])`

```js
var array = ['one', 'two', 'three', 'four', 'five']
console.log(array.slice()) // ["one", "two", "three","four", "five"]
console.log(array.slice(2, 3)) // ["three"]
```

## indexOf

indexOf() 方法用于查找元素在数组中第一次出现时的索引，如果没有，则返回-1。

## lastIndexOf

lastIndexOf() 方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是 indexOf 的逆向查找，即从数组最后一个往前查找。

## includes(ES7)

includes() 方法基于 ECMAScript 2016（ES7）规范，它用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回 false。

## forEach

## every

## some

## filter

## map

## reduce

## find&findIndex(ES6)

find() 方法基于 ECMAScript 2015（ES6）规范，返回数组中第一个满足条件的元素（如果有的话）， 如果没有，则返回 undefined。

findIndex() 方法也基于 ECMAScript 2015（ES6）规范，它返回数组中第一个满足条件的元素的索引（如果有的话）否则返回-1。

## links

- [【深度长文】JavaScript 数组所有 API 全解密](http://louiszhai.github.io/2017/04/28/array/)
