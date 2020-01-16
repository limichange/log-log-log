# vue 如何实现双向绑定

Vue 三要素

- 响应式: 例如如何监听数据变化,其中的实现方法就是我们提到的双向绑定
- 模板引擎: 如何解析模板
- 渲染: Vue 如何将监听到的数据变化和解析后的 HTML 进行渲染

Vue 的操作就是加入了发布订阅模式，结合 Object.defineProperty 的劫持能力，实现了可用性很高的双向绑定。

`Object.defineProperty` and `Proxy`

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

Proxy 可以直接监听对象而非属性

Proxy 可以直接监听数组的变化

Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的。
Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改。

## links

- [面试官: 实现双向绑定 Proxy 比 defineproperty 优劣如何?](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)
