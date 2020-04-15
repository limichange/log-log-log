// setImmediate(() => {
//   console.log(1)
//   setTimeout(() => {
//     console.log(2)
//   }, 100)
//   setImmediate(() => {
//     console.log(3)
//   })
//   process.nextTick(() => {
//     console.log(4)
//   })
// })
// process.nextTick(() => {
//   console.log(5)
//   setTimeout(() => {
//     console.log(6)
//   }, 100)
//   setImmediate(() => {
//     console.log(7)
//   })
//   process.nextTick(() => {
//     console.log(8)
//   })
// })
// console.log(9)

let a = '<div>{value}</div><div>{value}</div>'

let c = new RegExp(/{\w+}/g)

console.log(a.replace(c, 'test'))

let str = 'xiaozhima2019xiaozhima2020xiaozhima2021'
let reg = /\d+/
console.log(reg.exec(str))
