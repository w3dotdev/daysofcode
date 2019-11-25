const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

const reverseCompare = compareFn => (a, b) => compareFn(b, a);

const swap = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
}
