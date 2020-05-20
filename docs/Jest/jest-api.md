# Jest Api Globals

In your test files, Jest puts each of these methods and objects into the global environment. You don't have to require to import anything to use them. However, if you prefer explicit imports, you can do `import { describe, expect, it } form '@jest/globals'`.

## Methods

### afterAll(fn, timeout)

Runs a function after all the tests in this file have completed. If the function returns a promise or is a generator, Jest watis for that promise to resolve before continuing.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.

For example:

```ts
const globalDatabase = makeGlobalDatabse()

function cleanUpDatabase() {
  db.cleanUp()
}

afterAll(() => {
  cleanUpDatabse()
})
```

Here the `afterall` ensures that `cleanUpDatabase` is called after all tests run.

If `afterAll` is inside `descible` block, it runs at the end of the desc block.

If you want to run some cleanup after every test instead of after all tests, use `afterEach` instead.

### afterEach(fn, timeout)

Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before continuing.

This is often useful if you want to clean up some temporary state that is created by each test.

FOr Example:

```ts
const globalDatabase = makeGlobalDatabase()

function cleanUpDatabase(db) {
  db.cleanUp()
}

afterEach(() => {
  cleanUpDatabase(globalDatabase)
})
```

### beforeAll(fn, timeout)

### beforeEach(fn, timeout)

### describe(name, fn)

`describe(name, fn)` creates a block that groups togather several related tests. FOr example, if you have a `myBeverage` object that is supposed to be delicious but not sour, you could test it with:

```ts
const myBeverage = {
  delicious: true,
  sour: false,
}

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy()
  })

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy()
  })
})
```

### describe.each(table)(name, fn, timeout)

```ts
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected)
  })

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected)
  })
})
```

### describe.only(name, fn)

Also under the alias: `fdescribe(name, fn)`

```ts
describe.only('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy()
  })

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy()
  })
})

describe('my other beverage', () => {
  // ... will be skipped
})
```

### describe.only.each(table)(name, fn)

### test(name, fn, timeout)

Also under the alias: `it(name, fn, timeout)`

### test.todo(name)

Also under the alias: `it.todo(name)`

Use `test.todo` when you are planning on writing tests. These tests will be hightlighted in the summary output at the end so you know how many test you still need todo.

## links

- [Globals](https://jestjs.io/docs/en/api)
