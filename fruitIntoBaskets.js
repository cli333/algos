// an array of trees
// start at any tree
// 1. add one fruit from this tree into your basket, if cannot stop
// 2. move to next right tree, if no right tree, stop

// you have two baskets, each basket can carry any quantity of fruit, but each basket can only carry one TYPE of fruit
// what is the total amoutn of fruit you can collect?

// each number is a different type of fruit

// trees = [1,2,1]
// output = 3 (1,2,1)
// collect one from each = 3

// [1,2,3,2,2]
// 4 (2,3,2,2)
// collect one from each = 4

// what this is asking is for the longest contiguous subarray containing only two numbers!!

const intoBasket = trees => {
  // keep track of two fruits
  let firstFruit = null; // set to null, because haven't seen
  let secondFruit = null;
  let lastFruitCount = 0;
  let m = 0; // current max
  let max = 0;

  // sliding window

  for (let fruit of trees) {
    // if the current === first or second
    // add to current max
    // else must not have a first and second
    // and set m to last(which is 0) + 1, because of window reset
    if (fruit === firstFruit || fruit === secondFruit) {
      m++;
    } else {
      m = lastFruitCount + 1;
    }

    // if current = first, window still growing
    // add to fruit count
    // else reset the fruit count to 1
    if (fruit === firstFruit) {
      lastFruitCount++;
    } else {
      lastFruitCount = 1;
    }

    // keep track of fruits
    // SWAP
    // set secondFruit to firstFruit
    // set firstFruit to the current fruit
    if (fruit !== firstFruit) {
      secondFruit = firstFruit;
      firstFruit = fruit;
    }

    max = Math.max(max, m);
  }

  return max;
};

console.log(intoBasket([1, 2, 1])); // 3
console.log(intoBasket([1, 2, 3, 2, 2])); // 4
