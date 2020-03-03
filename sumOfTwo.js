// two int arrays (a, b), target (v)
// find a pair of numbers where one is from a and other from b
// such that sum of pairs equals the target
// return true else false

// arrs not sorted, can be positive or negative

const sum = (a, b, v) => {
  if (!a.length || !b.length) return false;
  // turn one into a hash of complements
  const mapA = a.reduce((a, b) => {
    a[v - b] = b;
    return a;
  }, {});
  // loop through the other checking if hte complement exists
  for (let el of b) {
    if (el in mapA) {
      console.log(el, mapA[el]);
      return true;
    }
  }
  return false;
};

console.log(sum([1, 2, 3], [10, 20, 30, 40], 42));
