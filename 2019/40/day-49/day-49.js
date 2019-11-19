/*
 * Array
 ***********************************/
const stackArray = new StackArray();

console.log(stackArray.isEmpty());
// true

stackArray.push(10);
stackArray.push(11);
stackArray.push(9);

console.log(stackArray.peek());
// 9

stackArray.push(12);

console.log(stackArray.size());
// 4

console.log(stackArray.isEmpty());
// false

stackArray.pop();
stackArray.pop();

console.log(stackArray.size());
// 2

/*
 * Object
 ***********************************/
const stackObject = new StackObject();

console.log(Object.getOwnPropertyNames(stackObject));
// ["count", "items"]
console.log(Object.keys(stackObject));
// ["count", "items"]

stackObject.push(10);
stackObject.push(11);

console.log(stackObject.items);
// {0: 10, 1: 11}

stackObject.items[3] = 'test'; // :(

console.log(stackObject.items);
// {0: 10, 1: 11, 3: "test"}

console.log(stackObject);
// StackObject {count: 2, items: {…}}

/*
 * Using WeakMap for Private Properties
 ***********************************/
const stack = new Stack();

stack.push(10);
stack.push(11);

console.log(stack.peek());
// 11

console.log(stack.size());
// 2

console.log(stack);
// Stack {}
