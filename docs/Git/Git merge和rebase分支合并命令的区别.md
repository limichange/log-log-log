# Git merge 和 rebase 分支合并命令的区别

## merge

只处理一次冲突
引入了一次合并的历史记录，合并后的所有 commit 会按照提交时间从旧到新排列
所有的过程信息更多，可能会提高之后查找问题的难度

## rebase

改变当前分支从 master 上拉出分支的位置
没有多余的合并历史的记录，且合并后的 commit 顺序不一定按照 commit 的提交时间排列
可能会多次解决同一个地方的冲突（有 squash 来解决）
更清爽一些，master 分支上每个 commit 点都是相对独立完整的功能单元

## links

- [Git merge 和 rebase 分支合并命令的区别](https://juejin.im/post/5af26c4d5188256728605809#heading-2)
