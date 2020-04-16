# Express 和 Koa

```js
//Express
var express = require('express')
var app = express() //创建一个APP实例

//建一个项目根目录的get请求路由，回调方法中直接输出字符串Hello World!
app.get('/', function (req, res) {
  res.send('Hello World!')
})

//监听端口，启动服务
app.listen(3000)
```

```js
//Koa
var koa = require('koa')
var route = require('koa-route') //koa默认没有集成route功能，引入中间件

var app = koa() //创建一个APP实例

//建一个项目根目录的get请求路由，回调方法中直接输出字符串Hello World!，就是挂载一个中间件
app.use(
  route.get('/', function* () {
    this.body = 'Hello World'
  })
)

//监听端口，启动服务
app.listen(3000)
```

## 中间件 Middleware

Express 由于是在 ES6 特性之前的，中间件的基础原理还是 callback 方式的；
而 koa 得益于 generator 特性和 co 框架（co 会把所有 generator 的返回封装成为 Promise 对象），使得中间件的编写更加优雅。

## links

- [Node.js 框架之 express 与 koa 对比分析](https://yq.aliyun.com/articles/3062)
- [再也不怕面试官问你 express 和 koa 的区别了](https://juejin.im/post/5da6eef5f265da5b6b631115#heading-9)
