# XSS CSRF

## XSS

XSS，即 Cross Site Script，中译是跨站脚本攻击；其原本缩写是 CSS，但为了和层叠样式表(Cascading Style Sheet)有所区分，因而在安全领域叫做 XSS。

XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

攻击者对客户端网页注入的恶意脚本一般包括 JavaScript，有时也会包含 HTML 和 Flash。有很多种方式进行 XSS 攻击，但它们的共同点为：将一些隐私数据像 cookie、session 发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作。

XSS 攻击可以分为 3 类：

- 反射型（非持久型）

用户将一段含有恶意代码的请求提交给 Web 服务器，Web 服务器接收到请求时，又将恶意代码反射给了浏览器端，这就是反射型 XSS 攻击。
在现实生活中，黑客经常会通过 QQ 群或者邮件等渠道诱导用户去点击这些恶意链接，所以对于一些链接我们一定要慎之又慎。

- 存储型（持久型）

利用漏洞提交恶意 JavaScript 代码，比如在 input, textarea 等所有可能输入文本信息的区域，输入<script src="http://恶意网站"></script>等，提交后信息会存在服务器中，当用户再次打开网站请求到相应的数据，打开页面，恶意脚本就会将用户的 Cookie 信息等数据上传到黑客服务器。

- 基于 DOM。

基于 DOM 的 XSS 攻击是不牵涉到页面 Web 服务器的。它的特点是在 Web 资源传输过程或者在用户使用页面的过程中修改 Web 页面的数据。比如利用工具(如 Burpsuite)扫描目标网站所有的网页并自动测试写好的注入脚本等。

### XSS 攻击的防范

- HttpOnly 防止劫取 Cookie
- 输出检查
- 输入检查

## CSRF

CSRF，即 Cross Site Request Forgery，中译是跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

把操作伪装成一个链接，而这个链接是一个操作的 api。点了就中招了。

### CSRF 攻击的防范

- 充分利用好 Cookie 的 SameSite 属性。
- 验证码
- Referer Check
- 添加 token 验证

### window.opener

一般来说，打开同源(域名相同)的页面，不会有什么问题。但对于跨域的外部链接来说，存在一个被钓鱼的风险。比如你正在浏览购物网站，从当前网页打开了某个外部链接，在打开的外部页面，可以通过 window.opener.location 改写来源站点的地址。利用这一点，将来源站点改写到钓鱼站点页面上，例如跳转到伪造的高仿购物页面，当再回到购物页面的时候，是很难发现购物网站的地址已经被修改了的，这个时候你的账号就存在被钓鱼的可能了。

## links

- [浅说 XSS 和 CSRF](https://github.com/dwqs/blog/issues/68)
- [Web 安全总结(面试必备良药)](https://mp.weixin.qq.com/s?__biz=MzI0MzIyMDM5Ng==&mid=2649825865&idx=1&sn=a049c26b3f81d8657a6066b8e11a7f05&chksm=f175e88ac602619cd82cca9716d7054007470ac77ba1a2d5b23d667cd0e7af73ebeba62ce835&scene=21#wechat_redirect)
