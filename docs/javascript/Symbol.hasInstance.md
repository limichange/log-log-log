# Symbol.hasInstance

```ts
class Array1 {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance)
  }
}

console.log([] instanceof Array1)
```

## links

- [Symbol/description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description)
