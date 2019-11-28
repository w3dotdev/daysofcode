const interpolationSearch = (array, value) => {
  const { length } = array;
  const lesserEquals = (a, b) => a < b || a === b;
  const biggerEquals = (a, b) => a > b || a === b;
  const diffFn = (a, b) => Number(a) - Number(b);
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (low <= high && biggerEquals(value, array[low]) && lesserEquals(value, array[high])) {
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);

    if (array[position] === value) {
      return position;
    }

    if (array[position] < value) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}
