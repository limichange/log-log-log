# 虚拟 DOM Diff 算法解析

两个相同组件产生类似的 DOM 结构，不同的组件产生不同的 DOM 结构；
对于同一层次的一组子节点，它们可以通过唯一的 id 进行区分。

## 不同节点类型的比较

1）节点类型不同

2）节点类型相同，但是属性不同

## 逐层进行节点比较

对于不同层的节点，只有简单的创建和删除

## 由 DOM Diff 算法理解组件的生命周期

## 相同类型节点的比较

## 列表节点的比较

这时如果每个节点都没有唯一的标识，React 无法识别每一个节点，那么更新过程会很低效

## links

- [深入浅出 React（四）：虚拟 DOM Diff 算法解析](https://www.infoq.cn/article/react-dom-diff)
