# http 网络劫持与 DNS 劫持原理及预防

## 网络劫持的原理

### DNS 劫持

一般而言，用户上网的 DNS 服务器都是运营商分配的，所以在这个节点上，运营商可以为所欲为。
例如，访问http://jiankang.qq.com/index.html，正常DNS应该返回腾讯的ip，而DNS劫持后，会返回一个运营商的中间服务器ip。访问该服务器会一致性的返回302，让用户浏览器跳转到预处理好的带广告的网页，在该网页中再通过iframe打开用户原来访问的地址。

### HTTP 劫持

在运营商的路由器节点上，设置协议检测，一旦发现是 HTTP 请求，而且是 html 类型请求，则拦截处理。
常见有两种：

类似 DNS 劫持返回 302 让用户浏览器跳转到另外的地址。(钓鱼网站就是这么干)
在服务器返回的 HTML 数据中插入 js 或 dom 节点（广告）。（比较常见）

## 被劫持怎么办?

对于用户来说，最最直接的就是向运营商投诉。
在 html 上加上 <meta http-equiv="Cache-Control" content="no-siteapp"> <meta http-equiv="Cache-Control" content="no-transform " /> 百度官方给的禁止转码声明。
最有用的方式，使用 HTTPS ,不让数据那么明显的裸奔。 https 加了 SSL 协议，会对数据进行加密。
在开发的网页中加入代码过滤，大概思路就是用 JavaScript 代码检查所有的外链是否属于白名单。

## js 实际对抗

在 window 监听 DOMNodeInserted 事件，上报插入的 dom、分析插入的 dom 信息。(通常匹配所有的 url,逐个比较是否白名单域名，如果不是，则判定为劫持，上报的同时，移除 dom.parentNode.removeChild(dom)); 刚插入的 dom。小心误伤。比较稳的操作是做监测统计，再决策预防。

## links

- [http 网络劫持与 DNS 劫持原理及预防](https://juejin.im/post/5cb00dec6fb9a0686a22404c)
