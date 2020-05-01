# Array.prototype.copyWithin()

The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

```ts
const array1 = ['a', 'b', 'c', 'd', 'e']

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4))
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
// expected output: Array ["d", "d", "e", "d", "e"]
```

## syntax

### target

zero-based index at which to copy the sequence to. if Negative, target will be counted from the end.

If target is at or greather than arr.length, nohting will be copied. If target is positioned after `start`, the copied sequence will be trimmed to fit `arr.length`.

### start

zero-based index at which to start copying elements from. If negative, start will be counted from the end.

### end

zero-based index at which to end copying elements from. copyWithin ccopies up to but not including end. If negative, end wil be counted from the end.

If end is omitted, copyWithin will copy until the last index(default to arr.length)

### return

The modified array.

## links

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
