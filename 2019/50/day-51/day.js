/*
 * Singly
 ***********************************/
const list = new LinkedList();

list.push(13);
console.log(list.indexOf(13));
// 0
list.push(10);
console.log(list.toString());
// 13,10
console.log(list.indexOf(10));
// 1
list.push(11);
list.push(19);
console.log(list.toString());
// 13,10,11,19
list.removeAt(1);
console.log(list.toString());
// 13,11,19
list.insert(20, 0);
list.insert(21, 1);
console.log(list.toString());
// 20,21,13,11,19
list.remove(20);
console.log(list.toString());
// 21,13,11,19

 /*
 * Doubly
 ***********************************/
const list2 = new DoublyLinkedList();

list2.push(5);
console.log(list2.toString());
// 5
list2.push(9);
list2.push(10);
list2.removeAt(0);
console.log(list2.toString());
// 9,10
list2.insert(8, 0);
list2.insert(11, 3);
console.log(list2.toString());
// 8,9,10,11
list2.removeAt(list2.size() - 1);
console.log(list2.toString());
// 8,9,10

 /*
 * Circular
 ***********************************/
const list3 = new CircularLinkedList();

list3.push(20);
console.log(list3.toString());
// 20
list3.insert(15, 0);
list3.insert(15.5, 1);
console.log(list3.toString());
// 15,15.5,20
list3.removeAt(0);
list3.removeAt(1);
console.log(list3.toString());
// 15.5

 /*
 * Sorted
 ***********************************/
const list4 = new SortedLinkedList();

for (let i = 5; i > 0; i--) {
  list4.push(i);
}

console.log(list4.toString());
// 1,2,3,4,5

list4.removeAt(1);
list4.remove(5)

console.log(list4.toString());
// 1,3,4

// SortedLinkedList with custom sorting function
class Example {
  constructor(item1, item2) {
    this.item1 = item1;
    this.item2 = item2;
  }
  toString() {
    return `${this.item1.toString()}|${this.item2.toString()}`;
  }
}

const exampleCompare = (a, b) => a.toString().localeCompare(b.toString());
const sll = new SortedLinkedList(defaultEquals, exampleCompare);

sll.push(new Example(4, 5));
sll.push(new Example(1, 2));
console.log(sll.toString());
// 1|2,4|5
sll.insert(new Example(0, 0), 3);
console.log(sll.toString());
// 0|0,1|2,4|5

 /*
 * Stack
 ***********************************/
const list5 = new StackLinkedList();

console.log(list5.isEmpty());
// true
list5.push(5);
list5.push(10);
console.log(list5.toString());
// 5,10
console.log(list5.peek());
// 10
list5.push(15);
list5.pop();
console.log(list5.size());
// 2
