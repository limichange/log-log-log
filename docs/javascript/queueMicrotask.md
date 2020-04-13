# queueMicrotask

The queueMicrotask() method, which is exposed on the Window or Worker interface, queues a microtask to be executed at a safe time prior to control returning to the browser's event loop. The microtask is a short function which will run after the current task has completed its work and when there is no other code waiting to be run before control of the execution context is returned to the browser's event loop.

```js
self.queueMicrotask(() => {
  // function contents here
})
```

```js
if (typeof window.queueMicrotask !== 'function') {
  window.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch((e) =>
        setTimeout(() => {
          throw e
        })
      )
  }
}
```

## links

- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask
