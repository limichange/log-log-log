# JSON.stringify

```js
console.log(JSON.stringify(product,['name']);

// 结果
{"name" : "Cake"}
```

第二个参数（函数）

第三个参数控制最后一个字符串的间距。如果参数是一个数字，则字符串化中的每个级别都将缩进这个数量的空格字符。

如果第三个参数是 string，那么将使用它来代替上面显示的空格字符。

我们有一个叫 toJSON 的方法，它可以作为任意对象的属性。JSON.stringify 返回这个函数的结果并对其进行序列化，而不是将整个对象转换为字符串。参考下面的例子。

```js
const user = {
  firstName: 'Prateek',
  lastName: 'Singh',
  age: 26,
  toJSON() {
    return {
      fullName: `${this.firstName} + ${this.lastName}`,
    }
  },
}

console.log(JSON.stringify(user))

// 结果
// "{ "fullName" : "Prateek Singh"}"
```

## links

- [JSON.stringify ](https://juejin.im/post/5e842da76fb9a03c854610c7#heading-5)
