# check URL

```ts
function checkURL(url: string) {
  try {
    new URL(url)
    return true
  } catch (e) {
    return false
  }
}
```
