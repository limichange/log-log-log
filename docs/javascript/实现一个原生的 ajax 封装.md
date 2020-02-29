# 实现一个原生的 ajax 封装

```javascript
function ajax(options) {
  return new Promise((resolve, reject) => {
    let method = options.method ? options.method.toUpperCase() : 'GET'
    let xhr = new XMLHttpRequest()

    if (method === 'POST') {
      xhr.open(method, options.url) //连接服务器
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded') //post请求添加请求头
      xhr.send(transformData(options.data)) //发送请求，带处理过的参数
    } else if (method === 'GET') {
      let url = options.data
        ? options.url + '?' + transformData(options.data)
        : options.url
      xhr.open(method, url) //get请求url需要拼接参数
      xhr.send()
    } else {
      //其他请求方式
      xhr.open(method, options.url)
      xhr.send()
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          let dataType = options.dataType || 'TEXT',
            data = null
          switch (dataType.toUpperCase()) {
            case 'JSON':
              data = JSON.parse(xhr.responseText)
              break
            case 'TEXT':
              data = xhr.responseText
              break
            case 'XML':
              data = xhr.responseXML
              break
          }
          resolve(data)
        } else {
          reject({
            statusCode: xhr.status,
            msg: '请求错误'
          })
        }
      }
    }
  })
}
```

## links

- [实现一个原生的 ajax 封装]()
