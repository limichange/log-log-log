# requestAnimationFrame

随着技术与设备的发展，用户的终端对动画的表现能力越来越强，更多的场景开始大量使用动画。在 Web 应用中，实现动画效果的方法比较多，JavaScript 中可以通过定时器 setTimeout 来实现，css3 可以使用 transition 和 animation 来实现，html5 中的 canvas 也可以实现。除此之外，html5 还提供一个专门用于请求动画的 API，即 requestAnimationFrame

requestAnimationFrame 的基本思想让页面重绘的频率与这个刷新频率保持同步

The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

## links

- [你知道的 requestAnimationFrame【从 0 到 0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429)
