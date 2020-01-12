# JS 错误监控

- 重写 console.error 方法
- 重写 window.onerror 方法
- 重写 window.onunhandledrejection 方法。 当你用到 Promise 的时候，而你又忘记写 reject 的捕获方法的时候，系统总是会抛出一个叫 Unhandled Promise rejection.

```js
window.onerror = function(errorMessage, scriptURI, lineNo, columnNo, error) {
  console.log('errorMessage: ' + errorMessage) // 异常信息
  console.log('scriptURI: ' + scriptURI) // 异常文件路径
  console.log('lineNo: ' + lineNo) // 异常行号
  console.log('columnNo: ' + columnNo) // 异常列号
  console.log('error: ' + error) // 异常堆栈信息
  // ...
  // 异常上报
}
```

## links

- [一步一步搭建前端监控系统：JS 错误监控篇](https://blog.fundebug.com/2019/07/06/how-to-monitor-javascript-error/)
- [前端性能与异常上报](https://segmentfault.com/a/1190000015808043)
