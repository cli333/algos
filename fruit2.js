const findMax = trees => {
  let first = null;
  let second = null;
  let lastCount = 0;
  let max = 0;
  let currentMax = 0;

  for (let tree of trees) {
    if (tree === first || tree === second) {
      currentMax++;
    } else {
      currentMax = lastCount + 1;
    }

    if (tree === first) {
      lastCount++;
    } else {
      lastCount = 1;
    }

    if (tree !== first) {
      second = first;
      first = tree;
    }

    max = Math.max(max, currentMax);
  }

  return max;
};

console.log(findMax([1, 2, 1])); // 3
console.log(findMax([1, 2, 3, 2, 2])); // 4
