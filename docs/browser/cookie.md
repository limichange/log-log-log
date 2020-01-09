# cookie

这个讲起来很简单，了解 http 的同学，肯定知道，http 是一个不保存状态的协议，什么叫不保存状态，就是一个服务器是不清楚是不是同一个浏览器在访问他，在 cookie 之前，有另外的技术是可以解决，这里简单讲一下，就是在请求中插入一个 token，然后在发送请求的时候，把这个东西带给服务器，这种方式是易出错，所以有了 cookie 的出现

## cookie 不可跨域

所以上面所说的不可跨域性，就是不能在不同的域名下用，每个 cookie 都会绑定单一的域名

## cookie 的属性

### name

这个显而易见，就是代表 cookie 的名字的意思，一个域名下绑定的 cookie，name 不能相同，相同的 name 的值会被覆盖掉

### value

由于 cookie 规定是名称/值是不允许包含分号，逗号，空格的，所以为了不给用户到来麻烦，考虑服务器的兼容性，任何存储 cookie 的数据都应该被编码。

### domain

这个是指的域名，这个代表的是，cookie 绑定的域名，如果没有设置，就会自动绑定到执行语句的当前域，还有值得注意的点，统一个域名下的二级域名也是不可以交换使用 cookie 的，比如，你设置 www.baidu.com 和 image.baidu.com,依旧是不能公用的

### path

path 这个属性默认是'/'，这个值匹配的是 web 的路由

### Max-Age / Expires

Max-Age，是以秒为单位的，Max-Age 为正数时，cookie 会在 Max-Age 秒之后，被删除，当 Max-Age 为负数时，表示的是临时储存，不会生出 cookie 文件，只会存在浏览器内存中，且只会在打开的浏览器窗口或者子窗口有效，一旦浏览器关闭，cookie 就会消失，当 Max-Age 为 0 时，又会发生什么呢，删除 cookie，因为 cookie 机制本身没有设置删除 cookie，失效的 cookie 会被浏览器自动从内存中删除，所以，它实现的就是让 cookie 失效。

### secure

这个属性译为安全，http 不仅是无状态的，还是不安全的协议，容易被劫持，打个比方，你在手机端浏览网页的时候，有没有中国移动图标跳出来过，闲言少叙，当这个属性设置为 true 时，此 cookie 只会在 https 和 ssl 等安全协议下传输

### HttpOnly

这个属性是面试的时候常考的，如果这个属性设置为 true，就不能通过 js 脚本来获取 cookie 的值，能有效的防止 xss 攻击

## 关于 js 操作 cookie

```js
//读取浏览器中的cookie
console.log(document.cookie)
//写入cookie
document.cookie = 'myname=laihuamin;path=/;domain=.baidu.com'
```

## links

- [把 cookie 聊清楚](https://juejin.im/post/59d1f59bf265da06700b0934)
