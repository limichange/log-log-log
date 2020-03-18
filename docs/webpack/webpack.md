# webpack

## webpack 的打包原理

识别入口文件
通过逐层识别模块依赖(Commonjs、amd 或者 es6 的 import，webpack 都会对其进行分析，来获取代码的依赖)
webpack 做的就是分析代码，转换代码，编译代码，输出代码
最终形成打包后的代码

## 什么是 loader

loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

处理一个文件可以使用多个 loader，loader 的执行顺序和配置中的顺序是相反的，即最后一个 loader 最先执行，第一个 loader 最后执行

第一个执行的 loader 接收源文件内容作为参数，其它 loader 接收前一个执行的 loader 的返回值作为参数，最后执行的 loader 会返回此模块的 JavaScript 源码

## links

- [webpack](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)
