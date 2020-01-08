# React diff

## tree diff

基于 tree diff 策略，React 对 Virtual DOM 树进行 分层比较、层级控制，只对相同颜色框内的节点进行比较(同一父节点的全部子节点)，当发现某一子节点不在了直接删除该节点以及其所有子节点，不会用于进一步的比较，在算法层面上就是说只需要遍历一次就可以了，而无需在进行不必要的比较，便能完成整个 DOM 树的比较。

## component diff

React 是基于组件构建应用的，对于组件间的比较所采用的策略也是简洁高效。

- 对于同一类型的组件，根据 Virtual DOM 是否变化也分两种，可以用 shouldComponentUpdate()判断 Virtual DOM 是否发生了变化，若没有变化就不需要在进行 diff，这样可以节省大量时间，若变化了，就对相关节点进行 update
- 对于非同一类的组件，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。

- 如果是同一类型的组件，按照原策略继续比较 Virtual DOM 树即可。
- 如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点。
- 对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切知道这点，那么就可以节省大量的 diff 运算时间。因此，React 允许用户通过 shouldComponentUpdate()来判断该组件是否需要进行 diff 算法分析，但是如果调用了 forceUpdate 方法，shouldComponentUpdate 则失效。

## element diff

所有同一层级的子节点.他们都可以通过 key 来区分-----并遵循策略 a、b。

## 总结

- React 通过分层求异的策略，对 tree diff 进行算法优化；
- React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化；
- React 通过设置唯一 key 的策略，对 element diff 进行算法优化；
- React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；
- 建议，开发时保持稳定的 DOM 结构有助于性能的提升；

## links

- https://juejin.im/post/5e002fc5f265da339e46443f
- https://juejin.im/post/5b3658f0518825522609e4c0
- https://juejin.im/post/5cb5b4926fb9a068b52fb823
