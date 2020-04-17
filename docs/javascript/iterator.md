# iterator

```ts
let range = {
  from: 1,
  to: 5,
}

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

// now it works!
for (let num of range) {
  alert(num) // 1, then 2, 3, 4, 5
}
```

## links

- https://javascript.info/iterable
