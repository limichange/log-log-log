# JSONP

> JSONP 是 JSON with Padding 的略称。它是一个非官方的协议，它允许在服务器端集成 Script tags 返回至客户端，通过 javascript callback 的形式实现跨域访问（这仅仅是 JSONP 简单的实现形式）

很简单，就是利用`<script>`标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个`<script>`元素，地址指向第三方的 API 网址，形如： `<script src="http://www.example.net/api?param1=1&param2=2"></script>` 并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。 第三方产生的响应为 json 数据的包装（故称之为 jsonp，即 json padding），形如： callback({"name":"hax","gender":"Male"}) 这样浏览器会调用 callback 函数，并传递解析后 json 对象作为参数。本站脚本可在 callback 函数里处理所传入的数据。 补充：“历史遗迹”的意思就是，如果在今天重新设计的话，也许就不会允许这样简单的跨域了嘿，比如可能像 XHR 一样按照 CORS 规范要求服务器发送特定的 http 头。
