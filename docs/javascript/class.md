# class

```js
// Object.create

Object.create = function(proto) {
  function F() {}
  F.prototype = proto
  return new F()
}
```

```js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass // todo
}

_inheritsLoose(son, _father)

function son() {
  return _father.apply(this, arguments) || this
}
```

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function prototype(child, parent) {
  child.prototype = object(parent.prototype)
  child.prototype.constructor = child
}

// 当我们使用的时候：
prototype(Child, Parent)
```
