# bind & property method & arrow function

The initialization of arrow functions in class properties are transpiled into the constructor.

Arrow functions in class properties won’t be in the prototype and we can’t call them with super.

Arrow functions in class properties are much slower than bound functions, and both are much slower than usual function.

You should only bind with .bind() or arrow function a method if you’re going to pass it around.

## links

- [autobind-decorator](https://github.com/andreypopp/autobind-decorator)
- [Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)
