# Commonjs、esm、Amd 和 Cmd 的循环依赖表现和原理

## Commonjs

模块被循环依赖时，只会输出当前执行完成的导出值

## ES module

ES module 不是动态解析，且依赖模块优先执行

实际上 ES module 从加载入口模块到所有模块实例的执行主要经历了三步：构建、实例化和运行。

从入口模块开始，根据 import 关键字遍历依赖树，每遍历一个模块则生成该模块的 模块记录（module record），最后生成整个 模块图谱（module graph）。

ES module 在构建过程不会实例化和执行任何的 js 代码，也就是所谓的 静态解析 过程。

所有的模块记录都会被缓存在 模块映射（module map） 中，被依赖多次的模块也只会存在唯一一条映射记录，从而避免模块的重复下载和实例化。

JS 引擎不需要关心是否存在循环依赖，只需要在代码运行的时候，从内存空间中读取该导出值。

## links

- [Commonjs、esm、Amd 和 Cmd 的循环依赖表现和原理](https://www.jianshu.com/p/ba0faf79c167)
