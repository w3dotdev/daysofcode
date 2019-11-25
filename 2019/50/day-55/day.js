/*
 * Trie
 ***********************************/
const trie = new Trie();

trie.insert('one');
trie.insert('two');
trie.insert('four');
trie.insert('five');
trie.insert('seventeen');

console.log(trie.toString());
// o t f s - n w o i e - e o u v v - r e e - n - t - e - e - n

console.log(trie.get());
// ["one", "two", "four", "five", "seventeen"]
console.log(trie.size());
// 5
console.log(trie.search('one'));
// true
console.log(trie.search('on'));
// false

trie.remove('one');

console.log(trie.search('one'));
// false
console.log(trie.size());
// 4
console.log(trie.get());
// ["two", "four", "five", "seventeen"]
