/**
 * Primitives
 **********************/
// string
const string = '';
console.log(typeof string);

// number
const number = 1;
console.log(typeof number);
console.log(typeof NaN, '<<< NaN');
console.log(typeof Infinity, '<<< Infinity');

// boolean
const boolean = true;
console.log(typeof boolean);

// null
console.log(typeof null, '<<< null'); // "object" (not "null" for legacy reasons)
// In the first implementation of JavaScript, values were represented in two parts - a type tag and the actual value.
// There were 5 type tags that could be used, and the tag for referencing an object was 0.
// The null value, however, was represented as the NULL pointer, which was 0x00 for most platforms.
// As a result of this similarity, null has the 0 type tag, which corresponds to an object.

// undefined
let und;
console.log(typeof und, typeof undefined);

// Symbol
const symbol = Symbol('foo');
console.log(typeof symbol);

// BigInt
// https://www.npmjs.com/package/jsbi
const bigint = 1n;
console.log(typeof bigint);

/**
 * Objects
 **********************/
const object = new Object();
console.log(typeof object, object.constructor);
const array = new Array('1', '2');
console.log(typeof array, array.constructor);
const objNumber = new Number(4);
console.log(typeof objNumber, objNumber.constructor);
const objString = new String('abc');
console.log(typeof objString, objString.constructor);
const objBoolean = new Boolean(true);
console.log(typeof objBoolean, objBoolean.constructor);
const objDate = new Date();
console.log(typeof objDate, objDate.constructor);
const objFunction = new Function;
console.log(typeof objFunction, objFunction.constructor);
// Functions belong to the object type. But typeof treats them differently, returning "function". That’s not quite correct, but very convenient in practice.
const objSymbol = Symbol('a');
console.log(typeof new Object(objSymbol), objSymbol.constructor); // new Symbol() === TypeError
const objBigInt = BigInt(1n);
console.log(typeof new Object(objBigInt), objBigInt.constructor); // new BigInt() === TypeError

