# RegExp

## 单个字符

| 特殊字符   | 正则表达式 | 记忆方式     |
| ---------- | ---------- | ------------ |
| 换行符     | \n         | new line     |
| 换页符     | \f         | form feed    |
| 回车符     | \r         | return       |
| 空白符     | \s         | space        |
| 制表符     | \t         | tab          |
| 垂直制表符 | \v         | vertical tab |
| 回退符     | [\b]       | backspace    |

## 多个字符

| 匹配区间                                      | 正则表达式 | 记忆方式            |
| --------------------------------------------- | ---------- | ------------------- |
| 除了换行符之外的任何字符                      | .          | 句号,除了句子结束符 |
| 单个数字, [0-9]                               | \d         | digit               |
| 除了[0-9]                                     | \D         | not digit           |
| 包括下划线在内的单个字符，[A-Za-z0-9_]        | \w         | word                |
| 非单字字符                                    | \W         | not word            |
| 匹配空白字符,包括空格、制表符、换页符和换行符 | \s         | space               |
| 匹配非空白字符                                | \S         | not space           |

## 循环与重复

| 匹配规则     | 元字符          | 联想方式        |
| ------------ | --------------- | --------------- |
| 0 次或 1 次  | ?               | 且问,此事有还无 |
| 0 次或无数次 | \*              |                 |
| 1 次或无数次 | +               | 一加, +1        |
| 特定次数     | {x}, {min, max} |                 |

##

## links

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [正则表达式不要背](https://juejin.im/post/5cdcd42551882568651554e6)
- [JS 正则表达式完整教程（略长）](https://juejin.im/post/5965943ff265da6c30653879)
