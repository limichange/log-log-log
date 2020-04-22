# Error Boundaries

It’s more like a strategy for handling errors in React components.

`static getDerivedStateFromError` is a lifecycle method that allows the Error Boundary a chance to update the state and thus triggering a last render().

`componentDidCatch` is a lifecycle method designed for triggering side-effects (eg.: logging the error to tools like Crashlytics). You can access info.componentStack to get a developer-friendly stack trace that will be useful for triaging the bug.

## links

- [A Simple Guide to Error Boundaries in React](https://alligator.io/react/error-boundaries/)
