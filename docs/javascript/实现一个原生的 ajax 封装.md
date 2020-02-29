# 实现一个原生的 ajax 封装

```javascript
function ajax(options) {
  return new Promise((resolve, reject) => {
    let method = options.method ? options.method.toUpperCase() : 'GET'
    let xhr = new XMLHttpRequest()
  })
}
```

## links

- [实现一个原生的 ajax 封装]()
