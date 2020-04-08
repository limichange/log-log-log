# 微任务、宏任务与 Event-Loop

首先，JavaScript 是一个单线程的脚本语言, Event Loop 是 javascript 的执行机制。

在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。
在当前的微任务没有执行完成时，是不会执行下一个宏任务的。
所有会进入的异步都是指的事件回调中的那部分代码.

```js
setTimeout((_) => console.log(4)) // 宏任务

new Promise((resolve) => {
  // 同步
  resolve()
  console.log(1)
}).then((_) => {
  console.log(3) // 微任务
})

console.log(2) // 同步
```

也就是说 `new Promise` 在实例化的过程中所执行的代码都是同步进行的，而 then 中注册的回调才是异步执行的。
在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。
所以就得到了上述的输出结论 1、2、3、4。

这个检查的过程是持续进行的，每完成一个任务都会进行一次，而这样的操作就被称为 Event Loop。

## 分类

### 宏任务

| #                     | 浏览器 | Node |
| --------------------- | ------ | ---- |
| I/O                   | ✅     | ✅   |
| setTimeout            | ✅     | ✅   |
| setInterval           | ✅     | ✅   |
| setImmediate          | ❌     | ✅   |
| requestAnimationFrame | ✅     | ❌   |

有些地方会列出来 UI Rendering，说这个也是宏任务，可是在读了 HTML 规范文档以后，发现这很显然是和微任务平行的一个操作步骤
requestAnimationFrame 姑且也算是宏任务吧，requestAnimationFrame 在 MDN 的定义为，下次页面重绘前所执行的操作，而重绘也是作为宏任务的一个步骤来存在的，且该步骤晚于微任务的执行

`setTimeout`就是作为宏任务来存在的，而`Promise.then`则是具有代表性的微任务

在官方文档中的定义，setImmediate 为一次 Event Loop 执行完毕后调用。
setTimeout 则是通过计算一个延迟时间后进行执行。

node 和 浏览器 eventLoop 的主要区别
两者最主要的区别在于浏览器中的微任务是在每个相应的宏任务中执行的，而 nodejs 中的微任务是在不同阶段之间执行的。

### 微任务

| #                          | 浏览器 | Node |
| -------------------------- | ------ | ---- |
| process.nextTick           | ❌     | ✅   |
| MutationObserver           | ✅     | ❌   |
| Promise.then catch finally | ✅     | ✅   |

### 区别

- 微任务进入主线程执行是一队一队的, 而宏任务进入主线程是一个一个的。
- 微任务是在主线程空闲时批量执行, 宏任务是在事件循环下一轮的最开始执行

## async/await 函数

因为，async/await 本质上还是基于 Promise 的一些封装，而 Promise 是属于微任务的一种。所以在使用 await 关键字与 Promise.then 效果类似：

```js
setTimeout((_) => console.log(4))

async function main() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

main()

console.log(2)
```

`async 函数在 await 之前的代码都是同步执行的，可以理解为 await 之前的代码属于 new Promise 时传入的代码，await 之后的所有代码都是在 Promise.then 中的回调`

## links

- [微任务、宏任务与 Event-Loop](https://juejin.im/post/5b73d7a6518825610072b42b)
- [JS 事件循环机制（event loop）之宏任务/微任务](https://juejin.im/post/5b498d245188251b193d4059)
- [事件循环 形象深动(JavaScript)](https://juejin.im/post/5e0a8d57f265da33a55fb33c)
- [JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
