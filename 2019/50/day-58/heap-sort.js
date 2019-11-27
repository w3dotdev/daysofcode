const heapify = (array, index, heapSize) => {
  let largest = index;
  const left = (2 * index) + 1;
  const right = (2 * index) + 2;
  if (left < heapSize && array[left] > array[index]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize);
  }
}

const buildMaxHeap = array => {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length);
  }
  return array;
}

const heapSort = array => {
  let heapSize = array.length;
  buildMaxHeap(array);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize);
  }
  return array;
}
