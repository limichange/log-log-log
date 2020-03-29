# HOC 实践

## 属性代理(Props Proxy)

```js
function ppHOC(WrappedComponent) {
  return class extends Component {
    render() {
      const obj = { a: 1, b: 2 }
      return <WrappedComponent {...this.props} {...obj} />
    }
  }
}

@ppHOC
class B extends Component {
  render() {
    return (
      <div>
        {this.props.a + this.props.b} {/* 输出 3 */}
      </div>
    )
  }
}
```

## 继承反转(Inheritance Inversion)

继承反转的核心是：传入 HOC 的组件会作为返回类的父类来使用。然后在 render 中调用 super.render() 来调用父类的 render 方法。

## links

- [HOC 实践](https://juejin.im/post/5b837692f265da434015865a#heading-4)
