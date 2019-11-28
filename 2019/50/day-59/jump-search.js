const jumpSearch = (sortedArray, seekElement) => {
  const arraySize = sortedArray.length;
  const compareFn = (a, b) => {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  if (!arraySize) {
    return -1;
  }

  const jumpSize = Math.floor(Math.sqrt(arraySize));
  let blockStart = 0;
  let blockEnd = jumpSize;

  while (compareFn(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1]) > 0) {
    blockStart = blockEnd;
    blockEnd += jumpSize;

    if (blockStart > arraySize) {
      return -1;
    }
  }

  let currentIndex = blockStart;

  while (currentIndex < Math.min(blockEnd, arraySize)) {
    if (compareFn(sortedArray[currentIndex], seekElement) === 0) {
      return currentIndex;
    }

    currentIndex += 1;
  }

  return -1;
}
