# Error Boundaries

It’s more like a strategy for handling errors in React components.

`static getDerivedStateFromError` is a lifecycle method that allows the Error Boundary a chance to update the state and thus triggering a last render().

`componentDidCatch` is a lifecycle method designed for triggering side-effects (eg.: logging the error to tools like Crashlytics). You can access info.componentStack to get a developer-friendly stack trace that will be useful for triaging the bug.

```tsx
class MyErrorBoundary extends Component {
  state = {
    errorMessage: '',
  }
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() }
  }
  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack)
  }
  // A fake logging service 😬
  logErrorToServices = console.log
  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}</p>
    }
    return this.props.children
  }
}
```

```tsx
function App() {
  return (
    <MyErrorBoundary>
      <BuggyCounter />
    </MyErrorBoundary>
  )
}
```

Instead of completed crashing, we can use Error Boundaries to substitute a fallback UI. This provides visual feedback to the user that something broke, while allowing them to continue interacting with our app.

## Error Boundaries vs Try…Catch?

Error Boundaries actually aren’t in direct competition with try…catch statements. Error Boundaries are only designed for intercepting errors that originate from 3 places in a React component:

- During render phase
- In a lifecycle method
- In the constructor

Basically… the React-y parts of a component. As a counterpoint, these are the places where Error Boundaries won’t be able to catch an error:

- Event handlers (eg., onClick, onChange, etc.)
- setTimeout or requestAnimationFramecallbacks
- Server-side rendering (SSR)
- And errors causesd by the error boundary itself (rather than its children)

## Conclusion

Now that Error Boundaries are available since React v16, it’s generally advisable to use at least 1 Error Boundary at the root of your app (eg., the App.js file). This will prevent users from seeing a blank HTML page, and perhaps see a nice fallback UI instead.

## links

- [A Simple Guide to Error Boundaries in React](https://alligator.io/react/error-boundaries/)
