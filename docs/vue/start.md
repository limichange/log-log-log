# vue2

https://vuejs.org/v2/guide/

### Array Change Detection

Vue wraps an observed array’s mutation methods so they will also trigger view updates. The wrapped methods are:

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

Due to limitations in JavaScript, Vue cannot detect the following changes to an array:

- When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
- When you modify the length of the array, e.g. vm.items.length = newLength

### vue 双向绑定的实现原理

### vue 中 key 的作用

### vue 父子组件间怎么进行通信

### 平时怎么处理多个同级组件间的通信的
