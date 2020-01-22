# dom

```js
// 获取单个元素
document.querySelector('.element')

// 获取元素集合
document.querySelectorAll('div')

// 元素的局部搜索
container.querySelector('#target')

// 创建元素
const link = document.createElement('a')

// 设置属性
link.setAttribute('href', '/home')
link.className = 'active'
link.textContent = '首页'
link.classList.add('hello')
link.classList.remove('hello')

// 插入 HTML 元素
document.body.insertAdjacentElement('beforeend', document.createElement('a'))

// <!-- beforebegin -->
// <div>
//   <!-- afterbegin -->
//   <span></span>
//   <!-- beforeend -->
// </div>
// <!-- afterend -->

// 插入文本
document.body.insertAdjacentText('afterbegin', 'cool!')

// 替换 DOM 元素
oldElement.replaceWith(newElement)

// 移除 DOM 元素
const target = document.querySelector('#target')
target.remove()

// DOM 观察者：MutationObserver
```

## links

- [Master the DOM](http://www.lixuejiang.me/2016/11/19/Master-the-DOM/)
- [DOM 操作进阶指南](https://juejin.im/post/5dd8a913e51d45232856f7e8)
