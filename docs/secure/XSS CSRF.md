# XSS CSRF

## XSS

XSS，即 Cross Site Script，中译是跨站脚本攻击；其原本缩写是 CSS，但为了和层叠样式表(Cascading Style Sheet)有所区分，因而在安全领域叫做 XSS。

XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

攻击者对客户端网页注入的恶意脚本一般包括 JavaScript，有时也会包含 HTML 和 Flash。有很多种方式进行 XSS 攻击，但它们的共同点为：将一些隐私数据像 cookie、session 发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作。

XSS 攻击可以分为 3 类：

- 反射型（非持久型）
- 存储型（持久型）
- 基于 DOM。

### XSS 攻击的防范

- HttpOnly 防止劫取 Cookie
- 输出检查
- 输入检查

## CSRF

CSRF，即 Cross Site Request Forgery，中译是跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

把操作伪装成一个链接，而这个链接是一个操作的 api。点了就中招了。

### CSRF 攻击的防范

- 验证码
- Referer Check
- 添加 token 验证

## links

- [浅说 XSS 和 CSRF](https://github.com/dwqs/blog/issues/68)
