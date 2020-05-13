# Typescript-Interfaec-Type

## Demo

```ts
type A = { a: number; b: number }
type B = { a: string; b: number }

interface C extends A, B {}
// error because interface don't allow never

type A1 = { a: number; b: number }
type B1 = { a: string; b: number }

type C1 = A1 & B1
```

## links

- [Typescript Playground](https://www.typescriptlang.org/play/?target=1&ssl=10&ssc=1&pln=1&pc=1#code/C4TwDgpgBAglC8UDeUCGAuKA7ArgWwCMIAnAGigM10JKgF8BYAKFEigCEFk1MBnYYgEssAc3KVs+IsXrNmw4CQBmqAMbQAwlAgAPRVgAmvWOU4pGTZq2gwAjFxQZJNMhSpTaF6x3uJHfAWExN2dpWUsWcE1fWHsAMh9mIA)
