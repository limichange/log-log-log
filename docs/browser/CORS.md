# CORS

浏览器对跨域请求区分为“简单请求”与“非简单请求”

（1) 请求方法是以下三种方法之一：

- HEAD
- GET
- POST

（2）HTTP 的头信息不超出以下几种字段：

- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：
- application/x-www-form-urlencoded、 multipart/form-data、text/plain

CORS 接收到此次请求后 ， 首先会判断 Origin 是否在允许源（由服务端决定）范围之内，如果验证通过，服务端会在 Response Header 添加 Access-Control-Allow-Origin、Access-Control-Allow-Credentials 等字段。

浏览器收到 Respnose 后会判断自己的源是否存在 Access-Control-Allow-Origin 允许源中，如果不存在，会抛出“同源检测异常”。

总结：简单请求只需要 CORS 服务端在接受到携带 Origin 字段的跨域请求后，在 response header 中添加 Access-Control-Allow-Origin 等字段给浏览器做同源判断。

总结：非简单请求需要 CORS 服务端对 OPTIONS 类型的请求做处理，其他与简单请求一致

## links

- [跨域——CORS 详解](https://zhuanlan.zhihu.com/p/24411090)
