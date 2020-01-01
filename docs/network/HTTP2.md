# HTTP2

> HTTP2 即超文本传输协议 2.0。是由互联网工程任务组（IETF）的 Hypertext Transfer Protocol Bis (httpbis)工作小组进行开发。主要是为了优化性能，前身是 Google 的 SPDY 。是兼容 HTTP1.1 的 HTTP1.1 发布于 1999 年。HTTP2 发布于 2015 年 5 月

## 总结

HTTP2 与 HTTP1.1 最重要的区别就是解决了线头阻塞的问题！其中最重要的改动是：多路复用 (Multiplexing)

### HTTP1.1 新改动

持久连接
请求管道化
增加缓存处理（新的字段如 cache-control）
增加 Host 字段、支持断点传输等

### HTTP2 新改动

二进制分帧
多路复用
头部压缩
服务器推送

## links

- [前端培训-中级阶段（27）- http 2.0（2019-11-28 期）](https://segmentfault.com/a/1190000020989869)
- [HTTP2 详解](https://juejin.im/post/5b88a4f56fb9a01a0b31a67e)
- [HTTP2 和 HTTPS 来不来了解一下？](https://juejin.im/post/5b5ef5a25188251af86bfebf)
- [http2 简介](https://juejin.im/post/5aaccf8f51882555784dbabc)
