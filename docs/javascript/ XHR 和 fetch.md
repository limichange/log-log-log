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

## links

- [[译]XMLHttpRequest 和 Fetch, 谁最适合 AJAX？](https://juejin.im/post/5e00770551882512360d6462)
