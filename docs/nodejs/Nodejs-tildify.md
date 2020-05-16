# tildify

```js
'use strict'
const path = require('path')
const os = require('os')

const homeDirectory = os.homedir()

module.exports = (absolutePath) => {
  const normalizedPath = path.normalize(absolutePath) + path.sep

  return (normalizedPath.indexOf(homeDirectory) === 0
    ? normalizedPath.replace(homeDirectory + path.sep, `~${path.sep}`)
    : normalizedPath
  ).slice(0, -1)
}
```

## path.normalize

https://nodejs.org/api/path.html#path_path_normalize_path

The path.normalize() method normalizes the given path, resolving '..' and '.' segments.

When multiple, sequential path segment separation characters are found (e.g. / on POSIX and either \ or / on Windows), they are replaced by a single instance of the platform-specific path segment separator (/ on POSIX and \ on Windows). Trailing separators are preserved.

If the path is a zero-length string, '.' is returned, representing the current working directory.

## path.sep

https://nodejs.org/api/path.html#path_path_sep

Provides the platform-specific path segment separator:

- \ on Windows
- / on POSIX

## links

[source](https://github.com/sindresorhus/tildify/blob/master/index.js)
