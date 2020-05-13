# Bottom and Top types in typescript

The concept of a `bottom` type and a `top` type is a construct that exists in mathematical type theory and exists in many programming languages. It exists in typescript and it is an important concept that is often ignored.

Typescript has two top types, `any` and `unknown`. `never` is the bottom type.

## Top Type

You will often see this quote when describing what a top type is:

> A top type is a supertype of every other type.

A `type` is really a set of all the possible values that can be bound to a variable or argument.

In basic object oriented programming, we know that a subtype variable or function argument can be bound to a supertype.

For example, the `walkies` function below takes a `dog` argument that is a supertype and can be bound to the subtypes `Pitbull` and `Alsation`.

```ts
class Dog {}
class Pitbull extends Dog {}
class Alsation extends Dog {}

function walkies(dog: Dog) {}

walkies(new Pitbull())
walkies(new Alsation())
```

In the same way a top type means that `all` other types in the type system are subtypes of the top type and as such we can assign anything to the top types, e.g:

```ts
let n: unknown = 5
let x: any = { foo: 'bar' }
let s: unknown = 'foobar'
```

The functions `topAny` and `topUnknown` below take a `value` argument that can be bound to any type.

```ts
function topAny(value: any) {}
function topUnknown(value: unknown) {}

topAny({ foo: 'bar' })
topUnknown(8)
topUnknown('8')
```

## The Infamous Any Type

Using `any` really an escape hatch basically tells the tsc compiler to stay out of the way and let me get on with things without any compile time type checks.

```ts
const func = (dog: any) => {
  dog.bark()
}
```

The `any` type really reverts to javascript's week typing and should really be avoided if possible now that `unknown` has been introduced.

## Unknown Type

The `unknown` type is a slightly different beast and was introduced in typescript 3. You can think of it is a typesafe type.

Just like all types are assignable to `any`, all types are assignable to `unknown`.

The goal of `unknown` is to have a type in its least capable form. While anything can be assigned to an `unknown` type, we need to narrow the type or conditionally check the type before we can actually use it in a meaningful way.

## Type Narrowing

Type narrowing is a crucial concept in typescript and I don't think enough is made of the concept.

In the example below, `type guards` are used to narrow the function argument `value` on line 17 below to the more specialized `Dog` or `Pitbull` types.

```ts
interface Dog {
  bark: () => void
}

interface Pitbull extends Dog {
  attack: () => void
}

const isDog = (value: any): value is Dog => {
  return value && !!value.bark
}
// 17
const isPitbull = (value: any): value is Pitbull => {
  return value && value.attack
}

const walkies = (value: unknown) => {
  if (isPitbull(value)) {
    value.bark()
    value.attack()
    return
  }

  if (isDog(value)) {
    value.bark()
  }
}
```

You cannot do much with the `unknown` type directly but you can use type guards to narrow the type to more specialised type-checking blocks of code operating on narrowed types. If we use `any` we get no type checking for our `unknown` type.

If you cast your mind back a few paragraphs to the somewhat dry explanation fo what top type is:

> A top type is a supertype of every other type.

```ts
const walkies = (value: unknown) => {}
```

As `unknown` is the supertype of every type in the same way as `Dog` is the supertype of `Pitbull` then it can accept any type but unlike `any`, we cannot just start invoking methods, instead the type is narrowed using type guards to guarantee that we are dealing with a more specialised type.

## Bottom Type never

`never` is quite possibly the most appropriate keyword I have ver come across.

`never` represents the types of values that can never happen. This is known as the bottom type in type category theory.

Examples of types that can never happen are:

- functions that never return
- type guards that return false

An example would be when an exception is thrown:

```ts
// const neverWalkies: (dog: Dog) => never
const neverWalkies = (dog: Dog) => {
  throw new Error('No walkies now')
}
```

The exception means that the function will never return a value so the return type is `never`.

The `never` or bottom types has no values. You might think `null` or `undefined` are bottom types but variables and arguments can be bound to `null` or `undefined` as values and `never` is a value that can never occur.

Ok great but what on earth use is this `never` type?

The first use of `never` is what we have just covered, it is to type functions that do not return etc.

Another very important use is to prune unwanted values from conditional types.

If we look at the definition for the typescript built in type `Extract`

```ts
type Extract<T, U> = T extends U ? T : never
```

We could use `Extract` to create a more specialised `TameDog` that not bite like this

```ts
type TameDog = Pick<Dog, Extract<keyof Dog, 'bark' |'walk'|'meow'>>

const doggy: TameDog = {
  bark() {
    console.log('woof woof')
  }

  walk() {
    console.log('good doggy')
  }
}
```

`Extract` on line 5 will distribute over all values in a union but as `meow` is not a key of `Dog`, it will return never from the conditional expression and be excluded from the new union of values passed into the `Pick` type.

Bottom and top types are an important concept and I hope this has helped to explain the concepts.

A top type can be assigned to anything, a bottom type can never happen and has no value and everything else falls somewhere ini between.

## link

- [Bottom and Top types in typescript ](https://thesoftwaresimpleton.com/blog/2019/05/26/ts-bottom-type)
