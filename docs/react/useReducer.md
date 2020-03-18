# useReducer

```js
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'decrement':
      return { count: state.count + 1 }
    case 'increment':
      return { count: state.count - 1 }
    default:
      throw new Error('action error')
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
```

## links

- [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
