# matchMedia

The `Window` interface's `matchMedia()` method returns a new `MediaQueryList` object
representing the parsed results of the specified media query string. The returned
`MediaQueryList` can then be used to determine if the `Document` matches the media query,
or to monitor a docuemtnt to detect when it matches ro stops matching the media query.

## Syntax

```bash
myList = window.matchMedia(mediaQueryString)
```

```ts
const mediaQueryList = {
  matches: false,
  media: '(prefers-color-scheme: dark)',
  onchange: null,
}

const mode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
```

## links

- [Window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
