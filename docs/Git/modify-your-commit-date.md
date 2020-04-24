# modify your commit date

```bash
$ git commit --amend  --date="commit_time"

# you can use 'data' command to display a date string
$ date -R
Sat, 24 Dec 2016 18:12:09 +0800

# then use it
git commit --amend --date="Sun, 25 Dec 2016 19:42:09 +0800"
```

## links

- [git 修改上次 git commit 的时间](https://blog.csdn.net/guoyajie1990/article/details/73824732)
