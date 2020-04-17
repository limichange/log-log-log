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

```ts
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users',
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
```

## links

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetu)
