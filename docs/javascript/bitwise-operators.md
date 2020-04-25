# Bitwise operators

```ts
const readPermission = 1 << 1
const writePermission = 1 << 2
const executePermission = 1 << 3

let myPermission = 0

myPermission = readPermission | writePermission

console.log(myPermission & readPermission) // true
```

## links

- [MDN Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
