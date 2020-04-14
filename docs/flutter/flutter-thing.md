# flutter

我们来看看 Flutter 技术栈。上面是用 Dart 写的 APP，下面有 DartFramework，Framework 里有安卓和 iOS 的主体，里面有很多动画等等。再往下会调到引擎，引擎里有消息、PlatformChannel、Dart VM 等，引擎层再到平台，我们看的是平台、安卓还是 Web，这是我们常规的一个架构。

Flutter 里四个核心线程：平台线程、UI 线程、GPU 线程、IO 线程

Flutter 是一个漂亮的 UI 工具，有时真的需要 Native 能力怎么办？比如调用相机的特性需要写 Native 代码，所以 Flutter 提供一套 Channel 机制，橙色部分代码，写相应平台安卓或者 iOS 定制代码，中间有一套机制帮你实现封装好，你写 Dart 代码直接可以调到安卓或者 iOS 代码，这个过程是异步的。

## links

- [跨平台技术趋势及字节跳动 Flutter 架构实践 | Flutter 沙龙回顾](https://juejin.im/post/5de75c6b518825127c26f0e7#heading-8)
