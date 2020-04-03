# requestAnimationFrame

随着技术与设备的发展，用户的终端对动画的表现能力越来越强，更多的场景开始大量使用动画。在 Web 应用中，实现动画效果的方法比较多，JavaScript 中可以通过定时器 setTimeout 来实现，css3 可以使用 transition 和 animation 来实现，html5 中的 canvas 也可以实现。除此之外，html5 还提供一个专门用于请求动画的 API，即 requestAnimationFrame

requestAnimationFrame 的基本思想让页面重绘的频率与这个刷新频率保持同步

The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.

按帧对网页进行重绘。该方法告诉浏览器希望执行动画并请求浏览器在下一次重绘之前调用回调函数来更新动画

由系统来决定回调函数的执行时机，在运行时浏览器会自动优化方法的调用

浏览器 UI 线程：浏览器让执行 JavaScript 和更新用户界面（包括重绘和回流）共用同一个单线程，称为“浏览器 UI 线程”
浏览器 UI 线程的工作基于一个简单的队列系统，任务会被保存到队列中直到进程空闲。一旦空闲，队列中的下一个任务就被重新提取出来并运行。这些任务要么是运行 JavaScript 代码，要么执行 UI 更新。

使用 requestAnimationFrame 执行动画，最大优势是能保证回调函数在屏幕每一次刷新间隔中只被执行一次，这样就不会引起丢帧，动画也就不会卡顿

## links

- [你知道的 requestAnimationFrame【从 0 到 0.1】](https://juejin.im/post/5c3ca3d76fb9a049a979f429)
