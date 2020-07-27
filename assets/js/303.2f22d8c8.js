(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{648:function(e,v,r){"use strict";r.r(v);var _=r(43),i=Object(_.a)({},(function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"微信小程序架构原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序架构原理"}},[e._v("#")]),e._v(" 微信小程序架构原理")]),e._v(" "),r("p",[e._v("整个小程序由两个 webview 组成，代码分为 UI 层和逻辑层。UI 层运行在第一个 WebView 当中，执行 DOM 操作和交互事件的响应，里面是 WAWebview.js 代码及编译后的内容。逻辑层执行在（第二个 webview 中）独立的 JS 引擎中（iOS：JavaScriptCore, android：X5 JS 解析器；统称 JSCore；开发工具中，nwjs Chrome 内核），WAService.js 代码和业务逻辑。")]),e._v(" "),r("p",[e._v("当我们对 view 层进行事件操作后，会通过 WeixinJSBridge 将数据传递到 Native 系统层。Native 系统层决定是否要用 native 处理，然后丢给 逻辑层进行用户的逻辑代码处理。逻辑层处理完毕后会将数据通过 WeixinJSBridge 返给 View 层。View 渲染更新视图。")]),e._v(" "),r("blockquote",[r("p",[e._v("YIS 采取了类似小程序的架构，分为逻辑层和 UI 层。UI 层运行在 WebView 中，而逻辑层运行在独立的 JS 引擎中。相应地，整个应用的代码，也分为两个大的部分，一部分运行在 WebView 中，一部分运行在 JS 引擎中。JS 引擎计算 DOM 结构输出给 WebView，WebView 转发用户的点击事件给 JS 引擎。")])]),e._v(" "),r("p",[e._v("通常的做法是在 webview 里面运行 render 的代码，然后另起一个线程运行 serviceworker，当 serviceworker 需要更新 dom 的时候把事件和数据通过 messagechannel 发送给 render 线程来执行，当业务需要传递到 render 层数据量较大，对象较复杂时，交互的性能就会比较差，因此针对这种情况我们提出一个优化的解决方案。")]),e._v(" "),r("p",[e._v("在小程序里面需要做的事情包含两个部分：")]),e._v(" "),r("ol",[r("li",[e._v("轻量级的 js 线程替换 serviceworker 来执行小程序业务逻辑的代码；")]),e._v(" "),r("li",[e._v("更高效的 worker 层和 render 层交互方式。")])]),e._v(" "),r("h2",{attrs:{id:"流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),r("h3",{attrs:{id:"传统的-webview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统的-webview"}},[e._v("#")]),e._v(" 传统的 webview")]),e._v(" "),r("p",[e._v("传统 web 页面显示需要经历一下几个步骤:")]),e._v(" "),r("ul",[r("li",[e._v("webview 初始化")]),e._v(" "),r("li",[e._v("加载 HTML, CSS, JS")]),e._v(" "),r("li",[e._v("编译 JS")]),e._v(" "),r("li",[e._v("Render 计算")]),e._v(" "),r("li",[e._v("DOM Path")])]),e._v(" "),r("h3",{attrs:{id:"weapp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#weapp"}},[e._v("#")]),e._v(" weapp")]),e._v(" "),r("h4",{attrs:{id:"webview-部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webview-部分"}},[e._v("#")]),e._v(" webview 部分")]),e._v(" "),r("ul",[r("li",[e._v("webview 初始化")]),e._v(" "),r("li",[e._v("加载 HTML，CSS, JS (经过拆分后，体积大幅度减小)")]),e._v(" "),r("li",[e._v("编译 JS")]),e._v(" "),r("li",[e._v("等待页面需要的数据")]),e._v(" "),r("li",[e._v("反序列化数据")]),e._v(" "),r("li",[e._v("执行 Patch")]),e._v(" "),r("li",[e._v("渲染页面")]),e._v(" "),r("li",[e._v("等待更多消息")])]),e._v(" "),r("h4",{attrs:{id:"jscore-部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jscore-部分"}},[e._v("#")]),e._v(" jscore 部分")]),e._v(" "),r("ul",[r("li",[e._v("初始化")]),e._v(" "),r("li",[e._v("加载框架 js 代码")]),e._v(" "),r("li",[e._v("编译 js")]),e._v(" "),r("li",[e._v("加载业务逻辑 js 代码")]),e._v(" "),r("li",[e._v("编译 js")]),e._v(" "),r("li",[e._v("计算首屏虚拟 DOM 结构")]),e._v(" "),r("li",[e._v("序列化数据，传输")]),e._v(" "),r("li",[e._v("等待 webview 消息，或者 Native 消息")])]),e._v(" "),r("p",[e._v("这样渲染进程和逻辑进程分离，并行处理：加速首屏渲染速度；避免单线程模型下，js 运算时间过长，UI 出现卡顿。 完全采用数据驱动的方式，不能直接操作 DOM，避免低质量的代码。 webview 和 jscore 可以预")]),e._v(" "),r("p",[e._v("不能灵活操作 DOM，无法实现较为复杂的爱的暖效果")]),e._v(" "),r("p",[e._v("部分和 NA 相关的视图有使用限制，如微信的 scrollView 内不能有 textarea。")]),e._v(" "),r("p",[e._v("页面大小、打开页面数量都受到限制")]),e._v(" "),r("p",[e._v("需要单独开发适配，不能复用现有代码资源。")]),e._v(" "),r("h2",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" links")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/entry/5b8de6b7f265da432f655528",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信小程序架构原理"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.infoq.cn/article/ullETz7q_Ue4dUptKgKC",target:"_blank",rel:"noopener noreferrer"}},[e._v("支付宝小程序技术架构全解析"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=i.exports}}]);