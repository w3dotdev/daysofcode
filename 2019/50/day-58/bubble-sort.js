const bubbleSort = array => {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j], array[j+1]]; //swap
      }
    }
  }
  return array;
}
