setImmediate(() => {
  console.log(1)
  setTimeout(() => {
    console.log(2)
  }, 100)
  setImmediate(() => {
    console.log(3)
  })
  process.nextTick(() => {
    console.log(4)
  })
})
process.nextTick(() => {
  console.log(5)
  setTimeout(() => {
    console.log(6)
  }, 100)
  setImmediate(() => {
    console.log(7)
  })
  process.nextTick(() => {
    console.log(8)
  })
})
console.log(9)
