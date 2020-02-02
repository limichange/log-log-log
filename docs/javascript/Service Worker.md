# Service Worker

Service Worker 是浏览器在后台独立于网页运行的、用 JavaScript 编写的脚本。

## 生命周期

Service Worker 生命周期：安装中、安装后、激活中、激活后、我废了。（有点像组件的生命周期不是吗？）
首次导航到网站时，会下载、解析并执行 Service Worker 文件，触发 install 事件，尝试安装 Service Worker，如果 install 事件回调函数中的操作都执行成功，标志 Service Worker 安装成功，此时进入 waiting 状态，注意这时的 Service Worker 只是准备好了而已，并没有生效，当用户二次进入网站时，才会激活 Service Worker，此时会触发 activate 事件，标志 Service Worker 正式启动，开始响应 fetch、post、sync 等事件。

## 应用场景

Service Worker 的初衷是极致优化用户体验，是用来锦上添花的，技术只是技术，但实际应用前，应考虑成本和收益。

## links

- [Service Worker 从入门到出门](https://juejin.im/post/5d26aec1f265da1ba56b47ea)
