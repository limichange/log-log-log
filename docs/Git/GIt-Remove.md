# git remove

```bash
# If you want to remove the file from the Git repository and the filesystem, use:

git rm file1.txt
git commit -m "remove file"

# But if you want to remove the file only from the Git repository and not remove it from the filesystem, use:

git rm --cached file1.txt
git commit -m "remove file"
```

## links

- [How can I delete a file from a Git repository?](https://stackoverflow.com/questions/2047465/how-can-i-delete-a-file-from-a-git-repository)
