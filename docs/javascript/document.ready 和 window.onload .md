# document.ready 和 window.onload

document.ready 和 window.onload 的区别是：上面定义的 document.ready 方法在 DOM 树加载完成后就会执行，而 window.onload 是在页面资源（比如图片和媒体资源，它们的加载速度远慢于 DOM 的加载速度）加载完成之后才执行。也就是说\$(document).ready 要比 window.onload 先执行。

## links

- [原生 JS 实现 document.ready 以及和 window.onload 的先后顺序](https://baijiahao.baidu.com/s?id=1613225567743061589&wfr=spider&for=pc)
