# HOC 实践

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

## links

- [HOC 实践](https://juejin.im/post/5b837692f265da434015865a#heading-4)
