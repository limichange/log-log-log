# HMR

第一步：webpack 对文件系统进行 watch 打包到内存中
第二步：devServer 通知浏览器端文件发生改变
第三步：webpack-dev-server/client 接收到服务端消息做出响应
第四步：webpack 接收到最新 hash 值验证并请求模块代码
第五步：HotModuleReplacement.runtime 对模块进行热更新

## links

- [Webpack HMR 原理解析](https://zhuanlan.zhihu.com/p/30669007)
