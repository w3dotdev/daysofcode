const insertionSort = array => {
  const { length } = array;
  let temp;

  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }

  return array;
};
