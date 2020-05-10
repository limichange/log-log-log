# ECMAScript-Private-Fields

TypeScript 3.8 brings support for ECMAScript's private fields, parts of the stage-3 class fields proposal.

Unlike regular properties(even ones declared with the private modifier), private fields have a few rules to keep in mind. Some of them are:

- Private fields start with a # character. Sometimes we call theer private names.
- Every private field name is uniquely scoped to its containing class.
- TypeScript accessibility modifers like `public` or `private` can't be used on private fields.
- Private fields can't be accessed or even detected outside of the containing class - even by JS users! Sometimes we call this hard privacy.

Apart from `hard privacy`, another benefit of private fields is that uniqueness we just mentioned. For example, regular property declaration are prone to being overwritten in subclasses.

For any plain `.js` file users, private fields always have to be declared before they're assigned to.

```js
class C {
  constructor(foo: number) {
    // SyntaxError!
    // '#foo' needs to be declared before wrigting to it.
    this.#foo = foo
  }
}
```

## Which should I use?

We've already received many questions on which type of privates you should use as a TypeScript user: most commonly, `should I use the private keyword, or ECMAScript's hash/pound(#) private fields?` It depends!

When it comes to properties, TypeScript's private modifiers are fully earased - that means that at runtime, it acts entirely like a normal property and there's no way to tell that it was declared with a private modifier. When useing the private`keywrod, privacy is only endofred at compile-time/design-time, and for JavaScript consumers it's entirely intent-based.

This hard privacy is really useful for strictly ensureing that nobody can take use of any of your internal. If your're a libtary author, remving or renaming a private field should never cause a breaking change.

## links

- [ECMAScript Private Fields](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#ecmascript-private-fields)
