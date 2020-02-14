# substr 和 substring 的区别

两者都接收两个参数以控制子串的起止位置。第一个参数作用相同，都表示子串的起点位置，主要区别在于第二个参数：substr()要求获取一个长度 length，通过子串的长度来计算截止点，而 substring()则是直接定义终点的位置，从终点开始往后的字符串不被截取。换句话说，前者是“起点+长度”，后者是“起点+终点”。

## links

- [substr 和 substring 的区别](https://www.jianshu.com/p/638b5d04febe)
- [2018-10-25 JS——substr( )和 substring( )的区别](https://zhuanlan.zhihu.com/p/47558291)
