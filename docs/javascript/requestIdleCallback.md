# requestIdleCallback

The window.requestIdleCallback() method queues a function to be called during a browser's idle periods. This enables developers to perform background and low priority work on the main event loop, without impacting latency-critical events such as animation and input response. Functions are generally called in first-in-first-out order; however, callbacks which have a timeout specified may be called out-of-order if necessary in order to run them before the timeout elapses.

You can call requestIdleCallback() within an idle callback function to schedule another callback to take place no sooner than the next pass through the event loop.

```ts
var handle = window.requestIdleCallback(callback[, options])
```

## return

an ID which can be used to cancel the callback by passing it into the window.cancelIdleCallback()

## parameters

### callback

a reference to a function that should be called in the near future, when the event loop is idle.
The callback function is passed an IdleDeadline object describing the amount of time avaiable and whether or not the callback has been run beascuse the timeout period expired.

### options

timeout: if timeout is specified and has a positive value, and the callback has not already been called by the time `timeout` milliseconds have passed, the callback will be called during the next idle period, even if doing so risks causing a negative performance impact.

## links

- [requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- [w3/requestIdleCallback](https://www.w3.org/TR/requestidlecallback/)
