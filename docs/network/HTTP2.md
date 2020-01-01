# HTTP2

> HTTP2 即超文本传输协议 2.0。是由互联网工程任务组（IETF）的 Hypertext Transfer Protocol Bis (httpbis)工作小组进行开发。主要是为了优化性能，前身是 Google 的 SPDY 。是兼容 HTTP1.1 的 HTTP1.1 发布于 1999 年。HTTP2 发布于 2015 年 5 月

## 改进

### 首部压缩（Header Compression）

HTTP/1.1 并不支持 HTTP 首部压缩，为此 SPDY 和 HTTP/2 应运而生，SPDY 使用的是通用的 DEFLATE 算法，而 HTTP/2 则使用了专门为首部压缩而设计的 HPACK 算法。

### 服务端推送（Server Push）

### 多路复用

HTTP2 与 HTTP1.1 最重要的区别就是解决了线头阻塞的问题！其中最重要的改动是：多路复用 (Multiplexing)

多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。

众所周知，在 HTTP/1.1 协议中「浏览器客户端在同-时间，针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞」 。

因此 HTTP/2 可以很容易的去实现多流并行而不用依赖建立多个 TCP 连接，HTTP/2 把 HTTP 协议通信的基本单位缩小为一个一个的帧，这些帧对应着逻辑流中的消息。并行地在同一个 TCP 连接上双向交换消息。

### 二进制分帧

应用层(HTTP/2)和传输层(TCP or UDP)之间增加一个二进制分帧层。

在二进制分帧层中，`HTTP/2` 会将所有传输的信息分割为更小的消息和帧(`frame`) ，并对它们采用二进制格式的编码，其中 HTTP1.x 的首部信息会被封装到 HEADER frame,而相应的 Request Body 则封装到 DATA frame 里面。
HTTP/2 通信都在一个连接 上完成，这个连接可以承载任意数量的双向数据流。
在过去，HTTP 性能优化的关键并不在于高带宽，而是低延迟。TCP 连接会随着时间进行自我「调谐」，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移提高传输的速度。这种调谐则被称为 TCP 慢启动。由于这种原因，让原本就具有突发性和短时性的 HTTP 连接变的十分低效。
HTTP/2 通过让所有数据流共用同-个连接，可以更有效地使用 TCP 连接，让高带宽也能真正的服务于 HTTP 的性能提升。

## 总结

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
- [HTTP/2 相比 1.0 有哪些重大改进？](https://www.zhihu.com/question/34074946)
