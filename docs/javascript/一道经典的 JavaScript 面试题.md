# 一道经典的 JavaScript 面试题

```js
function Foo() {
  getName = function () {
    alert(1)
  }
  return this
}
Foo.getName = function () {
  alert(2)
}
Foo.prototype.getName = function () {
  alert(3)
}
var getName = function () {
  alert(4)
}
function getName() {
  alert(5)
}

//请写出以下输出结果：
Foo.getName() //2
getName() //4
Foo().getName() //window
getName() //1
new Foo.getName() //
new Foo().getName() //
new new Foo().getName() //3
```

## links

- [一道经典的 JavaScript 面试题](https://mp.weixin.qq.com/s/q636uCYUAXOYJMSTVIzlhg)
