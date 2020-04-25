# Bitwise operators

```ts
const readPermission = 1 << 1 // 2
const writePermission = 1 << 2 // 4
const executePermission = 1 << 3 // 8

let myPermission = 0

myPermission = readPermission | writePermission

console.log(myPermission & readPermission) // 2

myPermission ^= readPermission

console.log(myPermission & readPermission) // 4
```

## links

- [MDN Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
