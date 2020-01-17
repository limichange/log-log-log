# HTTP

## Accept

表示客户端期望服务器返回的媒体格式。

## Accept-Charset

表示客户端期望服务器返回的内容的编码格式。它同 Accept 头一样，也可以指定多个编码，以 q 值代表优先级。

```
Accept-Charset: utf8, gbk; q=0.6
```

## Content-Type

Content-Type 是服务器向客户端发送的头，代表内容的媒体类型和编码格式，是对 Accept 头和 Accept-Charset 头的统一应答。

```
Content-Type: text/html; charset=utf8
```

## Accept-Language

表示客户端期望服务器返回的内容的语言。

```
Accept-Language:zh-CN,en-US;q=0.8,zh-TW;q=0.6
```

## Content-Language

这个头字段内容是对 Accept-Language 的应答。服务器通过此字段告知客户端返回的 Body 信息的语言是什么。

## Content-Length

表示传输的请求／响应的 Body 的长度。

## Age

表示资源缓存的年龄，也就是资源自缓存以来到现在已经过去了多少时间，单位是秒。

```
Age: 86400
```

## Expires

服务器使用 Expect 头来告知对方资源何时失效。如果它的值等于 Date 头的值，就表示资源已经实效。

```
Expires: Thu, 01 Dec 1994 16:00:00 GMT
```

## ETag

资源标签，每个资源可以提供多个标签信息

## Allow

表示资源支持访问的 HTTP Method 类型。它是服务器对客户端的建议，告知对方请使用 Allow 中提到的 Method 来访问资源。

## Connection

当客户端和服务器需要协商连接的属性时，可以使用 Connection 头部。比较常用的一个值是 close，用来通知对方在当前请求结束后关闭连接。

## Last-Modified

标记资源的最近修改时间，它和 Date 比较类似，区别是 Last-Modified 代表修改时间，而 Date 是创建时间。

## Location

服务器向客户端发送 302 跳转的时候，总会携带 Location 头信息，它的值为目标 URL。

## Referer

Referer 是非常常用的头，它表示请求的发起来源 URI，也就是当前页面资源的父页面。如果你从 A 页面跳转到 B 页面，那么请求 B 页面的请求头里面就会有 Referer 信息，它的值就是 A 页面的访问地址。通过追踪 Referer，可得出资源页面之间复杂的跳转链，它非常适合用于网页的数据分析和路径优化。

## User-Agent

携带当前的用户代理信息，一般包含浏览器、浏览器内核和操作系统的版本型号信息。

## Cache-Control

no-cache 如果 no-cache 没有指定值，那就表示不允许缓存。

## links

- [鲜为人知的 HTTP 协议头字段详解大全「原创](https://juejin.im/post/5ab341e06fb9a028c6759ce0)
