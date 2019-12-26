```js
class father {
  a() {
    console.log(this)
  }
}

class son extends father {}
```

编译后的代码

```js
'use strict'

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass
}

var father =
  /*#__PURE__*/
  (function() {
    function father() {}

    var _proto = father.prototype

    _proto.a = function a() {
      console.log(this)
    }

    return father
  })()

var son =
  /*#__PURE__*/
  (function(_father) {
    _inheritsLoose(son, _father)

    function son() {
      return _father.apply(this, arguments) || this
    }

    return son
  })(father)
```
