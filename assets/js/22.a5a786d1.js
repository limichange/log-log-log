(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{368:function(t,v,_){"use strict";_.r(v);var e=_(43),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-response-status-codes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-response-status-codes"}},[t._v("#")]),t._v(" HTTP response status codes")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 响应状态代码指示特定 HTTP 请求是否已成功完成")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("type")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("code")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Informational responses")]),t._v(" "),_("td",[t._v("信息响应")]),t._v(" "),_("td",[t._v("100–199")])]),t._v(" "),_("tr",[_("td",[t._v("Successful responses")]),t._v(" "),_("td",[t._v("成功响应")]),t._v(" "),_("td",[t._v("200–299")])]),t._v(" "),_("tr",[_("td",[t._v("Redirects")]),t._v(" "),_("td",[t._v("重定向")]),t._v(" "),_("td",[t._v("300–399")])]),t._v(" "),_("tr",[_("td",[t._v("Client errors")]),t._v(" "),_("td",[t._v("客户端错误")]),t._v(" "),_("td",[t._v("400–499")])]),t._v(" "),_("tr",[_("td",[t._v("Server errors")]),t._v(" "),_("td",[t._v("服务器错误")]),t._v(" "),_("td",[t._v("500–599")])])])]),t._v(" "),_("ul",[_("li",[t._v("204 请求处理成功 但是没有任何资源返回给客户端(一般用于只需客户端向服务端发送消息)")]),t._v(" "),_("li",[t._v("206 对资源的某一部分请求 响应报文中包含由 Content-Range 指定范围的实体内容")]),t._v(" "),_("li",[t._v("301 永久重定向 如果把资源对应的 URI 保存为书签，则此时书签会根据 Localtion 首部字段提示的 URI 重新保存")]),t._v(" "),_("li",[t._v("302 临时重定向 临时地从旧地址 A 跳转到地址 B")]),t._v(" "),_("li",[t._v("303 和 301，302 类似 当使用 post 方法访问一个资源时，把客户端以 get 的方式重定向到对应的 URI，返回 303 状态码")]),t._v(" "),_("li",[t._v("304 资源已经找到，但是不满足条件，所以不把资源返回给客户端。常用于协商缓存。")]),t._v(" "),_("li",[t._v("400 请求报文内有语法错误")]),t._v(" "),_("li",[t._v("401 该状态码表示发送的请求需要通过 HTTP 认证，初次收到 401 响应浏览器弹出认证的对话窗口。若收到第二次 401 状态码，则说明第一次验证失败。")]),t._v(" "),_("li",[t._v("403 请求资源的访问被服务器拒绝，一般是未获得文件系统的访问权限，访问权限出现问题。")]),t._v(" "),_("li",[t._v("404 服务器上找不到请求资源 或路径错误")]),t._v(" "),_("li",[t._v("405 请求方法被服务端识别，但是服务端禁止使用该方法。可以用 OPTIONS 来查看服务器允许哪些访问方法")]),t._v(" "),_("li",[t._v("500 服务器端在执行请求时出错，一般是因为 web 应用出现 bug")]),t._v(" "),_("li",[t._v("502 代理服务器或网关从上游服务器中收到无效响应")]),t._v(" "),_("li",[t._v("503 服务器暂时处于超负载或停机维护，目前无法处理请求")])]),t._v(" "),_("h2",{attrs:{id:"_301-和-302-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_301-和-302-的区别"}},[t._v("#")]),t._v(" 301 和 302 的区别")]),t._v(" "),_("p",[t._v("301 和 302 状态码都表示重定向，就是说浏览器在拿到服务器返回的这个状态码后会自动跳转到一个新的 URL 地址，这个地址可以从响应的 Location 首部中获取（用户看到的效果就是他输入的地址 A 瞬间变成了另一个地址 B）——这是它们的共同点。\n   他们的不同在于。301 表示旧地址 A 的资源已经被永久地移除了(这个资源不可访问了)，搜索引擎在抓取新内容的同时也将旧的网址交换为重定向之后的网址；302 表示旧地址 A 的资源还在（仍然可以访问），这个重定向只是临时地从旧地址 A 跳转到地址 B，搜索引擎会抓取新的内容而保存旧的网址。 SEO302 好于 301")]),t._v(" "),_("h2",{attrs:{id:"links"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" links")]),t._v(" "),_("ul",[_("li",[t._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")]),t._v(" "),_("li",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status")])])])}),[],!1,null,null,null);v.default=s.exports}}]);