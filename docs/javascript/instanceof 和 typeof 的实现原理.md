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

所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为 0，因此直接被当做了对象来看待。

## instanceof

其实 instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

## links

- [instanceof 和 typeof 的实现原理](https://juejin.im/post/5b0b9b9051882515773ae714)
