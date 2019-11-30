// https://en.wikipedia.org/wiki/Knapsack_problem
// https://pt.wikipedia.org/wiki/Problema_da_mochila
// the knapsack problem - dynamic programming
const knapsack = (itemsNumber, capacity, weights, values) => {

  if(itemsNumber === 0 || capacity === 0) {
    return 0;
  }

  if(weights[itemsNumber - 1] > capacity) {
    return knapsack(itemsNumber - 1, capacity, weights, values);
  }

  const dontPutInKnapsack = knapsack(itemsNumber - 1, capacity, weights, values);
  const putInSack = values[itemsNumber - 1] + knapsack(itemsNumber - 1, capacity - weights[itemsNumber - 1], weights, values);

  return Math.max(dontPutInKnapsack, putInSack);
}

const itemWeights = [2, 3, 6];
const itemValues = [3, 6, 9];
const numberOfItemsToConsider = 10;
const totalNumberOfItems = 3;

const maximizeTotal = knapsack(totalNumberOfItems, numberOfItemsToConsider, itemWeights, itemValues);
console.log(maximizeTotal);
// 15
