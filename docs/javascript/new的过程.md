# new 的过程

```js
function newObject(func) {
  let n = Object.create(func.prototype)
  n.constructor = func.bind(n)
  n.constructor()
  return n
}

newObject(function () {})
```

```js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass
}
```

```js
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ proto: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
```

## links

- https://www.typescriptlang.org/play?target=1#code/LAKAxgNghgzjAEAzKAXAFgUwE7wN6nnigAoBKPUASDAHsA7GGiDAOghoHNj0BLGUgNwF4AX1BiQoSLASM68DAA8UGOgBMEydNjwigA
- https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PTAEEMGcE8DsGNQDMCuCAuBLA9rCAKASlAG8AoMkUAXwqqjkVQxzwCMjTKwBIcAd3CZ0BQtxoV4AGyiRk4dAAsApgCcuoUVx7xckbFOUA6KdgDm-JZkiEA3GU21aZabND68ygB7plsACZySAoq6iTUQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Ces2015-loose&prettier=false&targets=&version=7.7.7&externalPlugins=
