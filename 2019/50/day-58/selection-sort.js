const selectionSort = (array, compare) => {
  const { length } = array;
  const fn = compare ? compare : (a, b) => a - b;
  let indexMin;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i;

    for (let j = i; j < length; j++) {
      if (fn(array[indexMin], array[j]) > 0) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }

  return array;
};
