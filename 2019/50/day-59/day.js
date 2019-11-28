// https://www.geeksforgeeks.org/searching-algorithms/
// https://www.tutorialspoint.com/introduction-to-searching-algorithms
// https://pt.wikipedia.org/wiki/Algoritmo_de_busca

// https://en.wikipedia.org/wiki/Linear_search
// https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria
/*
 * Linear Search (Sequencial Search)
 ***********************************/
const ls = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12];
console.log(linearSearch(ls, 15));
// 6
console.log(linearSearch(ls, 24));
// 8
console.log('------------------------------------------------');

// https://en.wikipedia.org/wiki/Binary_search_algorithm
// https://wiki.portugal-a-programar.pt/algoritmo:pesquisa_binaria
/*
 * Binary Search
 ***********************************/
console.log(binarySearch([1, 3, 5, 7, 9], 3));
// 1
console.log('------------------------------------------------');

// https://en.wikipedia.org/wiki/Interpolation_search
/*
 * Interpolation Search
 ***********************************/
const is = [2, 6, 8, 12, 14, 16, 20, 24, 26, 28, 30, 31, 35];
console.log(interpolationSearch(is, 12));
// 3
console.log(interpolationSearch(is, 35));
// 12
console.log('------------------------------------------------');

/*
 * Min & Max Search
 ***********************************/
console.log(findMaxValue([101,12,30,46,52,6]));
// 101
console.log(findMinValue([10,21,3,42,50,36]));
// 3
console.log('------------------------------------------------');

// https://en.wikipedia.org/wiki/Jump_search
//
/*
 * Jump Search
 ***********************************/
const js = [2, 6, 8, 12, 43, 78, 99, 134, 144, 156, 199, 256, 500];
console.log(jumpSearch(js, 256));
// 11
console.log(jumpSearch(js, 2));
// 0
console.log('------------------------------------------------');
