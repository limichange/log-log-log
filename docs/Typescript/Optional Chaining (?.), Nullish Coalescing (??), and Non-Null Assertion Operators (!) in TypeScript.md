# Optional Chaining (?.), Nullish Coalescing (??), and Non-Null Assertion Operators (!) in TypeScript

## Optional Chaining Operator

```js
const cat = response.data?.animals?.cat
```

## Nullish Coalescing Operator

```js
const cat = response.data?.animals?.cat ?? 'No cat could be found.'
```

## Non-Null Assertion Operator

```js
const addNumbers = (a: number | undefined, b: number) => {
  const c: number = a!;// no error
  const d: number = b;
  return c + d;
}
```

## links

- [Optional Chaining (?.), Nullish Coalescing (??), and Non-Null Assertion Operators (!) in TypeScript](https://dev.to/jamenamcinteer/optional-chaining-nullish-coalescing-and-non-null-assertion-operators-in-typescript-5c82)
