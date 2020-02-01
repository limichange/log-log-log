# EventEmitter

```js
function EventEmitter() {}

// Shortcuts to improve speed and size
var proto = EventEmitter.prototype

proto.addListener = function addListener(evt, listener) {
  // if (!isValidListener(listener)) {
  //   throw new TypeError('listener must be a function')
  // }

  var listeners = this.getListenersAsObject(evt)
  var listenerIsWrapped = typeof listener === 'object'
  var key

  for (key in listeners) {
    if (
      listeners.hasOwnProperty(key) &&
      indexOfListener(listeners[key], listener) === -1
    ) {
      listeners[key].push(
        listenerIsWrapped
          ? listener
          : {
              listener: listener,
              once: false
            }
      )
    }
  }

  return this
}

proto.emitEvent = function emitEvent(evt, args) {
  var listenersMap = this.getListenersAsObject(evt)
  var listeners
  var listener
  var i
  var key
  var response

  for (key in listenersMap) {
    if (listenersMap.hasOwnProperty(key)) {
      listeners = listenersMap[key].slice(0)

      for (i = 0; i < listeners.length; i++) {
        // If the listener returns true then it shall be removed from the event
        // The function is executed either with a basic call or an apply if there is an args array
        listener = listeners[i]

        if (listener.once === true) {
          this.removeListener(evt, listener.listener)
        }

        response = listener.listener.apply(this, args || [])

        if (response === this._getOnceReturnValue()) {
          this.removeListener(evt, listener.listener)
        }
      }
    }
  }

  return this
}

proto.removeListener = function removeListener(evt, listener) {
  var listeners = this.getListenersAsObject(evt)
  var index
  var key

  for (key in listeners) {
    if (listeners.hasOwnProperty(key)) {
      index = indexOfListener(listeners[key], listener)

      if (index !== -1) {
        listeners[key].splice(index, 1)
      }
    }
  }

  return this
}
```

```js
var Jack = {
  subscribers: {
    'any': []
  },
  //添加订阅
  subscribe: function(type = 'any', fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    //将订阅方法保存在数组里
    this.subscribers[type].push(fn)
  },
  //退订
  unsubscribe: function(type = 'any', fn) {
    //将退订的方法从数组中移除
    this.subscribers[type] = this.subscribers[type].filter(function(item) {
      return item !== fn
    })
  },
  //发布订阅
  publish: function(type = 'any', ...args) {
    this.subscribers[type].forEach(function(item) {
      //根据不同的类型调用相应的方法
      item(...args)
    })
  }
}
```

## links

- [EventEmitter.js](https://github.com/Olical/EventEmitter/blob/master/EventEmitter.js)
- [从观察者模式到手写 EventEmitter 源码](https://juejin.im/post/5b987d92e51d450e51625080)
