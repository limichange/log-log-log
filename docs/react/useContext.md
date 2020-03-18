# useContext

```js
import React, { useContext } from 'react'
import './styles.css'

let theme = {
  background: '#222'
}

const themeContext = React.createContext(theme.background)

function Tool() {
  const theme = useContext(themeContext)

  return <div>{theme.background}</div>
}

export default function App() {
  return (
    <themeContext.Provider value={theme}>
      <div className='App'>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Tool />
      </div>
    </themeContext.Provider>
  )
}
```

## links

- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
