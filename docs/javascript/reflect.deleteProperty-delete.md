# Prefer `Reflect.deleteProperty` over the `delete` keyword in ES2015?

From the Reflect.deleteProperty MDN page:

> Return value
> A Boolean indicating whether or not the property was successfully deleted.

From the delete operator MDN page:

> Return Value
> Throws in strict mode if the property is an own non-configurable property (returns false in non-strict). Returns true in all other cases.

```ts
'use strict'
delete xyz.foo // throws; must mean there's a bug in my code somewhere
```

```ts
if (!Reflect.deleteProperty(xyz, 'foo')) {
  throw new Error('Welp, there\'s a bug, Jim.)';
}
```

## links

- [Prefer `Reflect.deleteProperty` over the `delete` keyword in ES2015?](https://github.com/xojs/xo/issues/14)
