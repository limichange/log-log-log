# infer

infer R 的位置代表了一个未知的类型

```ts
type Get<T> = T extends infer R ? R : never
```

## links

- [TypeScript Tutorial - 'infer' keyword](https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D)
- [infer](https://juejin.im/post/5e94595c6fb9a03c341daa75#heading-8)
