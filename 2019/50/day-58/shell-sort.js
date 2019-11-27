const shellSort = array => {
  let increment = array.length / 2;

  while (increment > 0) {
    for (let i = increment; i < array.length; i++) {
      let j = i;
      const temp = array[i];
      while (j >= increment && array[j - increment] > temp) {
        array[j] = array[j - increment];
        j -= increment;
      }
      array[j] = temp;
    }
    if (increment === 2) {
      increment = 1;
    } else {
      increment = Math.floor((increment * 5) / 11);
    }
  }

  return array;
}
