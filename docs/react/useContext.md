# useContext

```js
const themes = {
  light: {
    foreground: '#000000',
    background: '#222222'
  },
  dark: {
    foreground: 'red',
    background: 'white'
  }
}

const ThemeContext = React.createContext(themes.light)

function App() {
  return (
    <ThemeContext.Provider value>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}
```

## links

- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
