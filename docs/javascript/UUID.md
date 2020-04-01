# UUID

```js
// randomBytes的官方定义:生成加密的强伪随机数据。size参数是一个数字，指示要生成的字节数。
// 这里生成16字节数强伪随机数，返回类型为buffer的数据。
var rng = require('crypto').randomBytes(16)
// 将byte生成uuid 的 string的工具函数
function bytesToUuid(buf) {}
// 主干代码
module.exports = function v4() {
  var rnds = rng()
  // 位运算符&:两个数值的个位分别相与，同时为1才得1，只要一个为0就为0。
  // 位运算符|:两个位只要有一个为1，那么结果都为1。否则就为0
  // 将UUID的M和N位进行处理，处理后M位为4，N为a,b,8,9内的任意值
  rnds[6] = (rnds[6] & 0x0f) | 0x40
  rnds[8] = (rnds[8] & 0x3f) | 0x80
  return bytesToUuid(rnds)
}
```

## links

- [UUID](https://juejin.im/post/5d5641d6f265da03c5030b46#heading-5)
