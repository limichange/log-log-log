# RegExp

i 忽略大小写 ignoreCase
m 多行匹配 multiline
g 全局匹配 global
s 让“点”能匹配任意字符，包含 \n 和 \r

\
转义字符（把有特殊含义的字符转换成字符本身，也可以把普通字符转义成有特殊含义的字符）

\d
0~9 之间的数字

\D
除了 0 ～ 9 之外的任意字符

\w
数字、字母、下划线（小写 w）

\W
除了 数字、字母、下划线 的任意字符（大写 W）

^
以什么字符开头

\$
以什么字符结尾

.
代表除了换行以外的所有字符

\n
代表换行

\s
一个空白字符（包含空格、制表符、换行符等）

\t
一个制表符（一个 TAB 键：4 个空格）

\b
匹配一个单词的边界

x|y
代表 或；x 或 y

[xyz]
代表 或；x 或 y 或 z （与上一个的区别是：[]中前后只能写单个字符，而｜前后可以是一组数）

[^xy]
除了 xy 的任意字符

[a-z]
a~z 的任意字符 小写的英文字母

[^a-z]
除了 a-z 的任意字符

？
前面的字符出现 0 或者 1 次 即可

+
前面的字符出现 1 次或 多次 即可

\*
前面的字符出现 0 或 多次 即可

{n}
前面的字符连续出现 n 次 即可

{n,m}
前面的字符连续出现 n 到 m 次 即可

{n,}
前面的字符连续出现 n 到 多次 即可

## links

- [JS 中的正则表达式&&全面梳理｜内附思维导图](https://juejin.im/post/5e8ab4efe51d4547170a9233#heading-44)
