/*
 * Queue
 ***********************************/
const queue = new Queue();

console.log(queue.isEmpty());
// true

queue.enqueue('Nerd');
queue.enqueue('Hemerson');

console.log(queue.peek());
// Nerd

console.log(queue.toString());
// Nerd,Hemerson

console.log(queue.size());
// 2

console.log(queue.isEmpty());
// false

queue.dequeue();

console.log(queue.toString());
// Hemerson

queue.enqueue('Nerd');

console.log(queue.toString());

console.log(queue.peek());

/*
 * Deque
 ***********************************/
const deque = new Deque();

console.log(deque.isEmpty());
// true

deque.addBack('Nerd');
deque.addBack('Hemerson');
deque.addBack('Calistênico');

console.log(deque.toString());
// Nerd,Hemerson,Calistênico

console.log(deque.peekFront());
// Nerd

console.log(deque.peekBack());
// Calistênico

console.log(deque.size());
// 3

console.log(deque.isEmpty());
// false

deque.removeBack();

console.log(deque.toString());
// Nerd,Hemerson

deque.removeFront();

console.log(deque.toString());
// Hemerson
