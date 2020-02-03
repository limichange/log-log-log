# Proxy

```js
var proxy = new Proxy(target, handler)
```

```js
let target = {
  x: 10,
  y: 20
}

let hanler = {
  get: (obj, prop) => 42
}

target = new Proxy(target, hanler)

target.x //42
target.y //42
target.x // 42
```

Proxy 提供虚拟化接口来控制任何目标 Object 的行为。 这样做可以在简单性和实用性之间取得平衡，而不会牺牲兼容性。

## Proxy 的作用

对于代理模式 Proxy 的作用主要体现在三个方面:

- 1、 拦截和监视外部对对象的访问
- 2、 降低函数或类的复杂度
- 3、 在复杂操作前对操作进行校验或对所需资源进行管理

## links

- [ES6 中的代理模式-----Proxy](https://juejin.im/post/5a5227ce6fb9a01c927e85c4)
- [Proxy 的巧用](https://juejin.im/post/5d2e657ae51d4510b71da69d)
