# XHR 和 fetch

## XMLHttpRequest

```js
let xhr = new XMLHttpRequest()
xhr.open('GET', 'http://domain/service')

// request state change event
xhr.onreadystatechange = function() {
  // request completed?
  if (xhr.readyState !== 4) return

  if (xhr.status === 200) {
    // request successful - show response
    console.log(xhr.responseText)
  } else {
    // request error
    console.log('HTTP error', xhr.status, xhr.statusText)
  }
}

// start request
xhr.send()
```

## Fetch

```js
fetch('http://domain/service', { method: 'GET' })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('error:', error))
```

### 默认无 Cookie

与 XMLHttpRequest 不同，Fetch 并不会默认发送 cookie，因此应用的身份验证可能会失败。可以通过更改第二个参数中传递的初始值来解决此问题，例如：

```js
fetch('http://domain/service', {
  method: 'GET',
  credentials: 'same-origin'
})
```

### 不支持超时

Fetch 不支持超时，只要浏览器允许，请求将继续

### 中止 Fetch

通过 xhr.abort()很容易结束一个 XHR 请求

```js
const controller = new AbortController();

fetch(
  'http://domain/service',
  {
    method: 'GET'
    signal: controller.signal
  })
  .then( response => response.json() )
  .then( json => console.log(json) )
  .catch( error => console.error('Error:', error) );
```

Fetch 可以通过调用 controller.abort()来中止。Promise 被标记 reject 后，会调用.catch()函数。

### 没有 Progress

无法获取进度

## links

- [[译]XMLHttpRequest 和 Fetch, 谁最适合 AJAX？](https://juejin.im/post/5e00770551882512360d6462)
