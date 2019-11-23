/*
 * Map
 ***********************************/
const map = new Map();

map.set('Hemerson', 'hemerson@gmail.com');
map.set('Nerd', 'nerd@gmail.com');
map.set('Calistênico', 'calistenico@gmail.com');

console.log(map.hasKey('Nerd'));
// true
console.log(map.size());
// 3

console.log(map.keys());
// ["Hemerson", "Nerd", "Calistênico"]
console.log(map.values());
// ["hemerson@gmail.com", "nerd@gmail.com", "calistenico@gmail.com"]
console.log(map.get('Calistênico'));
// calistenico@gmail.com

map.remove('Nerd');

console.log(map.keys());
// ["Hemerson", "Calistênico"]
console.log(map.values());
// ["hemerson@gmail.com", "calistenico@gmail.com"]

console.log(map.keyValues());
// [{key: "Hemerson", value: "hemerson@gmail.com"}, {key: "Calistênico", value: "calistenico@gmail.com"}]
console.log(map.toString());
// [#Hemerson: hemerson@gmail.com],[#Calistênico: calistenico@gmail.com]

map.forEach((k, v) => console.log(`key: ${k}, value: ${v}`));
// key: Hemerson, value: hemerson@gmail.com
// key: Calistênico, value: calistenico@gmail.com

/*
 * Hash Table
 ***********************************/
const hashTable = new HashTable();

console.log(`${hashTable.hashCode('Hemerson')} - Hemerson`);
// 8 - Hemerson
console.log(`${hashTable.hashCode('Nerd')} - Nerd`);
// 4 - Nerd
console.log(`${hashTable.hashCode('Calistênico')} - Calistênico`);
// 5 - Calistênico
console.log(`${hashTable.hashCode('Unknown')} - Unknown`);
// 10 - Unknown
console.log(`${hashTable.hashCode('Developer')} - Developer`);
// 4 - Developer

hashTable.put('Hemerson', 'hemerson@gmail.com');
hashTable.put('Nerd', 'nerd@gmail.com');
hashTable.put('Calistênico', 'calistenico@gmail.com');
hashTable.put('Unknown', 'unknown@gmail.com');
hashTable.put('Developer', 'developer@gmail.com');

console.log(hashTable.toString());
// {4 => [#Developer: developer@gmail.com]},{5 => [#Calistênico: calistenico@gmail.com]},{8 => [#Hemerson: hemerson@gmail.com]},{10 => [#Unknown: unknown@gmail.com]}

console.log(hashTable.get('Calistênico'));
// calistenico@gmail.com

hashTable.remove('Calistênico');

console.log(hashTable.get('Calistênico'));
// undefined
console.log(hashTable.get('Developer'));
// developer@gmail.com

console.log(hashTable.toString());
// {4 => [#Developer: developer@gmail.com]},{8 => [#Hemerson: hemerson@gmail.com]},{10 => [#Unknown: unknown@gmail.com]}


