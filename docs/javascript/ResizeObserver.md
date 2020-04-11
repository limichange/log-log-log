# ResizeObserver

```js
var ro = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const cr = entry.contentRect
    console.log('Element:', entry.target)
    console.log(`Element size: ${cr.width}px x ${cr.height}px`)
    console.log(`Element padding: ${cr.top}px ; ${cr.left}px`)
  }
})

// Observe one or multiple elements
ro.observe(someElement)
```

## links

- https://developers.google.com/web/updates/2016/10/resizeobserver
