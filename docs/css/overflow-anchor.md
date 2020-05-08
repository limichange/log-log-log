# overflow-anchor

The overflow-anchor property enables us to opt out of Scroll Anchoring, which is a browser feature intended to allow content to load above the user's current DOM location without changing the user's location once that content has been fully loaded.

## Why We Need It

Scroll Anchoring is a browser feature that attempts to prevent a common situation where you may scroll down a webpage before the DOM has fully loaded and, when it does, any elements that load above your current loaction push you futher down the page.

## Syntax

```css
.article {
  overflow-anchor: [auto | none];
}
```

## Values

The overflow-anchor property accepts two values that essentially toggle whether or not the feature is enabled.

- `auto`(default): Enables scroll anchoring on the portion of the page or element on which it is applied.
- `none`: Disables scroll anchoring in part or all of a webpage, or excludes portions of the DOM from the being anchored, allowing content to reflow.

You'd probably apply this to the body, but you can scope it to any selector, and it will take effect if that element scrolls.

## links

- [overflow-anchor](https://css-tricks.com/almanac/properties/o/overflow-anchor/)
