# is-interactive

```js
module.exports = ({ stream: process.stdout } = {}) => {
  return Boolean(
    stream &&
      stream.isTTY &&
      process.env.TERM !== 'dumb' &&
      !('CI' in process.env)
  )
}
```

## links

- [sindresohus/is-interactive](https://github.com/sindresorhus/is-interactive/blob/master/index.js)
