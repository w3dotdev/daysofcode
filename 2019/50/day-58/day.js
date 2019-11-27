// https://en.wikipedia.org/wiki/Sorting_algorithm
// https://pt.wikipedia.org/wiki/Algoritmo_de_ordena%C3%A7%C3%A3o

// https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html
// https://www.devmedia.com.br/algoritmos-de-ordenacao-analise-e-comparacao/28261

/*
 * Bubble Sort
 ***********************************/
console.log(bubbleSort([7,5,2,4,3,9]));
// [2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9,7,5,4,3,1]));
// [1, 3, 4, 5, 7, 9]
console.log(bubbleSort([1,2,3,4,5,6]));
// [1, 2, 3, 4, 5, 6]
console.log('------------------------------------------------');

/*
 * Insertion Sort
 ***********************************/
console.log(insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log('------------------------------------------------');

 /*
 * Heap Sort
 ***********************************/
console.log(heapSort([3, 0, 2, 5, -1, 4, 1]));
// [-1 , 0, 1, 2, 3, 4, 5]
console.log('------------------------------------------------');

 /*
 * Merge Sort
 ***********************************/
console.log(mergeSort([10, 4, 2, 5, 2, 1, 9, 0]));
// [0, 1, 2, 2, 4, 5, 9, 10]
console.log('------------------------------------------------');

 /*
 * Quick Sort
 ***********************************/
console.log(quickSort([11,8,14,3,6,2,7],0,6));
// [2, 3, 6, 7, 8, 11, 14]
console.log(quickSort([11,8,14,3,6,2,1, 7],0,7));
// [1, 2, 3, 6, 7, 8, 11, 14]
console.log(quickSort([16,11,9,7,6,5,3, 2],0,7));
// [2, 3, 5, 6, 7, 9, 11, 16]
console.log('------------------------------------------------');

 /*
 * Selection Sort
 ***********************************/
console.log(selectionSort([3, 0, 2, 5, -1, 4, 1], (a, b) => a - b));
// [-1,0,1,2,3,4,5]
console.log(selectionSort([3, 0, 2, 5, -1, 4, 1], (a, b) => b - a));
// [5,4,3,2,1,0,-1]
console.log('------------------------------------------------');

 /*
 * Shell Sort
 ***********************************/
console.log(shellSort([3, 0, 2, 5, -1, 4, 1]));
// [-1,0,1,2,3,4,5]
console.log('------------------------------------------------');
