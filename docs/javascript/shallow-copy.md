# shallow copy

```ts
Object.assign({}, obj) //浅拷贝object
obj1 = { ...obj2 } //通过spread展开运算符浅拷贝obj2
Object.fromEntries(Object.entries(obj)) //通过生成迭代器再通过迭代器生成对象
Object.create({}, Object.getOwnPropertyDescriptors(obj)) //浅拷贝obj
Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj)) //浅拷贝obj
```
