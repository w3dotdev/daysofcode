/*
 * Set
 ***********************************/
const set = new Set();

set.add(5);
set.add(6);

console.log(set.values());
// [ 5, 6 ]
console.log(set.has(5));
// true
console.log(set.size());
// 2

set.delete(5);
set.delete(6);
console.log(set.values());
// []


// Union
const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

const unionAB = setA.union(setB);
console.log(unionAB.values());
// [1, 2, 3, 4, 5, 6]

// Intersection
const setC = new Set();
const setD = new Set();

setC.add(1);
setC.add(2);
setC.add(3);

setD.add(2);
setD.add(3);
setD.add(4);

const intersectionCD = setC.intersection(setD);
console.log(intersectionCD.values());
// [2, 3]

// Difference
const setE = new Set();
const setF = new Set();

setE.add(1);
setE.add(2);
setE.add(3);

setF.add(3);
setF.add(4);
setF.add(5);

const differenceEF = setE.difference(setF);
console.log(differenceEF.values());
// [1, 2]

// Subset
const setG = new Set();
const setH = new Set();
const setI = new Set();

setG.add(1);
setG.add(2);

setH.add(1);
setH.add(2);
setH.add(3);

setI.add(2);
setI.add(3);
setI.add(4);

console.log(setG.isSubsetOf(setH));
// true
console.log(setG.isSubsetOf(setI));
// false
