# nodejs buffer stream 区别

## buffer

为数据缓冲对象，是一个类似数组结构的对象，可以通过指定开始写入的位置及写入的数据长度，往其中写入二进制数据

## stream

是对 buffer 对象的高级封装，其操作的底层还是 buffer 对象，stream 可以设置为可读、可写，或者即可读也可写，在 nodejs 中继承了 EventEmitter 接口，可以监听读入、写入的过程。具体实现有文件流

## links

- [nodejs buffer stream 区别](https://segmentfault.com/q/1010000004017745)
