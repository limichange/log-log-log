# HTTPS

HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版。即 HTTP 下加入 SSL 层，HTTPS 的安全基础是 SSL，因此加密的详细内容就需要 SSL。 现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。

## HTTP 与 HTTPS 的区别

- HTTP 是明文传输，HTTPS 通过 SSL\TLS 进行了加密
- HTTP 的端口号是 80，HTTPS 是 443
- HTTPS 需要到 CA 申请证书，一般免费证书很少，需要交费
- HTTPS 的连接很简单，是无状态的
- HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 HTTP 协议安全

TLS/SSL = 非对称加密 + 对称加密 + 散列算法

## 为什么要使用 HTTPS

- 建立一个信息安全通道，来保证数据传输的安全
- 确认网站的真实性，防止钓鱼网站

## 原理

- 浏览器发出安全请求
- 服务器发送数字证书（包含服务器的 public key）
- 浏览器用预置 CA 列表验证证书，如果有风险，则提示
- 浏览器生产随机的对称秘钥
- 服务器用自己的 private key 进行解密，得到对称秘钥
- 双方都知道了对称秘钥，用他来加密通信

## links

- [HTTPS](https://juejin.im/post/59e4c02151882578d02f4aca)
