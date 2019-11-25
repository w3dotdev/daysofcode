/*
 * MinHeap
 ***********************************/
let heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);

heap.insert(2);

console.log(heap.getAsArray());
// [2, 2, 4, 5, 3]
console.log(heap.size());
// 5
console.log(heap.isEmpty());
// false
console.log(heap.findMinimum());
// 2

heap = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}

console.log(heap.getAsArray());
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(heap.extract());
// 1
console.log(heap.getAsArray());
// [2, 4, 3, 8, 5, 6, 7, 9]

/*
 * MaxHeap
 ***********************************/
const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

maxHeap.insert(1);

console.log(maxHeap.getAsArray(), ' <<<<<<');
// [5, 4, 3, 2, 1]
console.log(maxHeap.size());
// 5
console.log(maxHeap.isEmpty());
// false
console.log(maxHeap.findMinimum());
// 5

maxHeap.insert(6);
maxHeap.insert(9);
maxHeap.insert(10);
maxHeap.insert(14);

console.log(maxHeap.getAsArray());
// [14, 10, 6, 9, 1, 3, 5, 2, 4]
console.log(maxHeap.extract());
// 14
console.log(maxHeap.getAsArray());
// [10, 9, 6, 4, 1, 3, 5, 2]

