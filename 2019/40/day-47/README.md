# Data Types

## Primitives

A primitive is not an object and has no methods of its own.

- Boolean — true or false
- Null — no value
- Undefined — a declared variable but hasn’t been given a value
- Number — integers, floats, etc
- BigInt - integers, floats, doubles, or bignums - https://tc39.es/proposal-bigint/ - https://www.youtube.com/watch?v=RiU5OzMZ7z8 - https://caniuse.com/#feat=bigint - https://github.com/tc39/proposals/blob/master/finished-proposals.md
- String — an array of characters
- Symbol — a unique value that's not equal to any other value

Everything else is an Object type.

All primitives are immutable. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

```
// Using a string method doesn't mutate the string
let bar = "baz";
console.log(bar); // baz

bar.toUpperCase();
console.log(bar); // baz
```

```
// Using an array method mutates the array
let foo = [];
console.log(foo); // []

foo.push("plugh");
console.log(foo); // ["plugh"]
```

```
// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

## Objects

Here are some of the standard objects. Notice some of these were on the primitive list too, but don’t confuse them. These act as constructors to create those types.
There are two that are the main ones you’ll use for your own structures:

- Object
- Array

There are many other objects. Below we can see some:

- Function
- Boolean
- Symbol
- Error
- Number
- String
- RegExp
- Math
- Set
