# 路由 history hash

## Hash 模式

### 原理

早期的前端路由的实现就是基于 location.hash 来实现的，location.hash 的值就是 URL 中#后面的内容 其实现原理就是监听#后面的内容来发起 Ajax 请求来进行局部更新，而不需要刷新整个页面。

使用 hashchange 事件来监听 URL 的变化，以下这几种情况改变 URL 都会触发 hashchange 事件：浏览器前进后退改变 URL、a 标签改变 URL、window.location 改变 URL。

```js
function hashChange(e) {
  let app = document.getElementById('app')
  switch (location.hash) {
    case '#index':
      app.innerHTML = '<h1>这是首页内容</h1>'
      break
    case '#news':
      app.innerHTML = '<h1>这是新闻内容</h1>'
      break
    case '#user':
      app.innerHTML = '<h1>这是个人中心内容</h1>'
      break
    default:
      app.innerHTML = '<h1>404</h1>'
  }
}
window.onhashchange = hashChange
hashChange()
```

### 优点

- 兼容低版本浏览器，Angular1.x 和 Vue 默认使用的就是 hash 路由
- 只有#符号之前的内容才会包含在请求中被发送到后端，也就是说就算后端没有对路由全覆盖，但是不会返回 404 错误
- hash 值的改变，都会在浏览器的访问历史中增加一个记录，所以可以通过浏览器的回退、前进按钮控制 hash 的切换 会覆盖锚点定位元素的功能

### 缺点

- 不太美观，#后面传输的数据复杂的话会出现问题

## History 模式

### 原理

- history 提供了 pushState 和 replaceState 两个方法来记录路由状态，这两个方法改变 URL 不会引起页面刷新
- history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：通过浏览器前进后退改变 URL 时会触发 popstate 事件，通过 pushState/replaceState 或 a 标签改变 URL 不会触发 popstate 事件。好在我们可以拦截 pushState/replaceState 的调用和 a 标签的点击事件来检测 URL 变化，所以监听 URL 变化可以实现，只是没有 hashchange 那么方便。
- pushState(state, title, url) 和 replaceState(state, title, url)都可以接受三个相同的参数。

```js
window.history.pushState({}, '', path)
```

### 优点

- 使用简单，比较美观
  pushState()设置新的 URL 可以是任意与当前 URL 同源的 URL，而 hash 只能改变#后面的内容，因此只能设置与当前 URL 同文档的 URL
- pushState()设置的 URL 与当前 URL 一模一样时也会被添加到历史记录栈中，而 hash#后面的内容必须被修改才会被添加到新的记录栈中
- pushState()可以通过 stateObject 参数添加任意类型的数据到记录中，而 hash 只能添加短字符串
- pushState()可额外设置 title 属性供后续使用

### 缺点

- 前端的 URL 必须和向发送请求后端 URL 保持一致，否则会报 404 错误
- 由于 History API 的缘故，低版本浏览器有兼容行问题

## links

- [前端两种路由实现和使用场景](https://juejin.im/post/5e324bef6fb9a0300636df0e)
- [前端路由的两种模式-----Hash 模式 ，History 模式](https://juejin.im/post/5dac1d0d6fb9a04e0762e3f1)
