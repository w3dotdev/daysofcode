const items = ['a', 's', 'e', 'b', 'b', 'u', 's'];

// keys
const iterator0 = items.keys();
console.log(iterator0.next().value);
// values
const iterator1 = items.values();
console.log(iterator1.next().value);
// entries
const iterator = items.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done ? 'Done!' : '');

// copyWithin
console.log(items.copyWithin(0, 6, 7));

// fill
console.log(items.fill('c', 3, 5));

// reduceRight
const result = items.reduceRight((acc, currentValue) => acc + currentValue);
console.log(result);

const main = document.querySelector('[data-js="main"]');

main.innerHTML = result;
