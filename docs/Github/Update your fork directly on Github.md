# Update your fork directly on Github

With a locally cloned repository, you can do the same with git in your CLI as follows. First change to your repository folder, then confirm:

```shell
git remote -v
git remote add upstream https://github.com/OriginalOwner/OriginalProject.git
git remote -v
git fetch upstream
git checkout master
git merge upstream/master
```

# links

- https://rick.cogley.info/post/update-your-forked-repository-directly-on-github/
