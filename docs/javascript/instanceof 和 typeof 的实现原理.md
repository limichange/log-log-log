# instanceof 和 typeof 的实现原理

## typeof

其实，js 在底层存储变量的时候，会在变量的机器码的低位 1-3 位存储其类型信息 👉

000：对象
010：浮点数
100：字符串
110：布尔
1：整数
null：所有机器码均为 0
undefined：用 −2^30 整数来表示

## links

- [instanceof 和 typeof 的实现原理](https://juejin.im/post/5b0b9b9051882515773ae714)
