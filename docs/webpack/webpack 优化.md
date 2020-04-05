# webpack 优化

speed-measure-webpack-plugin

它能够测量出在你的构建过程中，每一个 Loader 和 Plugin 的执行时长

cache-loader

它所做的事情很简单，就是 babel-loader 开启 cache 后做的事情，将 loader 的编译结果写入硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存。

uglifyjs-webpack-plugin

记得开缓存

happypack

Externals cdn 外置

## links

- [Webpack 优化——将你的构建效率提速翻倍](https://juejin.im/post/5d614dc96fb9a06ae3726b3e#heading-3)
