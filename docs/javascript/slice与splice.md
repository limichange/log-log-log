# slice 与 splice

## slice

slice(start，end)

从 start 开始截取到 end 但是不包括 end
返回值为截取出来的元素的集合
原始的数组不会发生变化

## splice

splice(start,deleteCount,item1,item2…..)

```js
var arr3 = [1, 2, 3, 4, 5, 6, 7, 'f1', 'f2']
var arr4 = arr3.splice(2, 3) //删除第三个元素以后的三个数组元素(包含第三个元素)
console.log(arr4) //[3,4,5];
console.log(arr3) //[1,2,6,7,"f1","f2"]; 原始数组被改变

var arr5 = arr3.splice(2, 0, 'wu', 'leon')
//从第2位开始删除0个元素，插入"wu","leon"
console.log(arr5) //[] 返回空数组
console.log(arr3) // [1, 2, "wu", "leon", 6, 7, "f1", "f2"]; 原始数组被改变

var arr6 = arr3.splice(2, 3, 'xiao', 'long')
//从第2位开始删除3个元素，插入"xiao","long"
console.log(arr6) //["wu", "leon", 6]
console.log(arr3) //[1, 2, "xiao", "long", 7, "f1", "f2"]

var arr7 = arr3.splice(2) //从第三个元素开始删除所有的元素
console.log(arr7) //["xiao", "long", 7, "f1", "f2"]
console.log(arr3) //[1, 2]
```

## links

- [slice（）与 splice（）的用法和区别你清楚吗？](https://blog.csdn.net/wxl1555/article/details/79388292)
