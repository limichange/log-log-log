# lerna

```bash

# remove the node_modules directory from all packages
$ lerna clean

# publish packages in the current project
$ lerna publish

# bump version of package changed since the last release
$ lerna version

# link local packages together and install remaining package dependencies
$ lerna bootstrap

# list local packages
$ lerna ls

# list local packages that have changed since the last tagged release
$ lerna changed

# diff all packages or a single package since the last release
$ lerna diff [package]

# execute an arbitary command in each package
$ lerna exec -- <command> [...args]
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js

# run an npm script in each package that contains that script
$ lerna run <script> -- [...args]
$ lerna run test
$ lerna run build

# crate a new lerna repo or upgrade an existing repo to the current version of lerna
$ lerna init

# add a dependency to matched packages
$ lerna add <package>[@version] [--dev] [--exact] [--peer]

# remove the node_modules directory from all packages
$ lerna clean

# import a package into the monorepo with commit history
$ lerna import <path-to-repository>

# symlink togather all packages that are dependencies of each other
$ lerna link

# create new lerna-managed package
$ lerna create <name> [loc]

# print local environment information
$ lerna info
```

## links

- [lerna/lerna](https://github.com/lerna/lerna)
- [schneidmaster/lerna-rollup-watch](https://github.com/schneidmaster/lerna-rollup-watch/blob/master/package.json)
