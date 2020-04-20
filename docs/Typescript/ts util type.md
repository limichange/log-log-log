# ts util type

Constructs a type with all properties of T set to optional. This utility will return a type that represents all subsets of a given type.

## Partial<T>

```ts
interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})
```

## Readonly<T>

Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

```ts
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
```

## Record<K,T>

https://stackoverflow.com/questions/51936369/what-is-the-record-type-in-typescript

Constructs a type with a set of properties K of type T. This utility can be used to map the properties of a type to another type.

A Record<K, T> is an object type whose property keys are K and whose property values are T. That is, keyof Record<K, T> is equivalent to K, and Record<K, T>[K] is (basically) equivalent to T.

```ts
interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<
  'home' | 'about' | 'contact',
  {
    title: string
  }
> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
}
```

## Pick<T,K>

Constructs a type by picking the set of properties K from T.

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

## Omit<T,K>

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Omit<Todo, 'description'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
```

## Exclude<T,U>

Constructs a type by extracting from T all properties that are assignable to U.

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // "c"
type T2 = Exclude<string | number | (() => void), Function> // string | number
```

## NonNullable

Constructs a type by excluding null and undefined from T.

```ts
type T0 = NonNullable<string | number | undefined> // string | number
type T1 = NonNullable<string[] | null | undefined> // string[]
```

## Parameters<T>

```ts
declare function f1(arg: { a: number; b: string }): void
type T0 = Parameters<() => string> // []
type T1 = Parameters<(s: string) => void> // [string]
type T2 = Parameters<<T>(arg: T) => T> // [unknown]
type T4 = Parameters<typeof f1> // [{ a: number, b: string }]
type T5 = Parameters<any> // unknown[]
type T6 = Parameters<never> // never
type T7 = Parameters<string> // Error
type T8 = Parameters<Function> // Error
```

## links

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetu)
