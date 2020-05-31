// Given an array of strings products and a string searchWord.We want to design a system that suggests at most three product names from products after each character of searchWord is typed.Suggested products should have common prefix with the searchWord.If there are more than three products with a common prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed.

//   Example 1:

// Input: products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"
// Output: [
//   ["mobile", "moneypot", "monitor"],
//   ["mobile", "moneypot", "monitor"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile", "moneypot", "monitor", "mouse", "mousepad"]
// After typing m and mo all products match and we show user["mobile", "moneypot", "monitor"]
// After typing mou, mous and mouse the system suggests["mouse", "mousepad"]

function solve(products, searchWord) {
  const res = [];

  // start and end pointer
  let lo = 0;
  let hi = products.length - 1;

  // sort products
  products.sort();

  // for each char in search word
  for (let i = 0; i < searchWord.length; i++) {
    // move start and end pointers
    // while char at searchword doesn't match char at both pointers
    while (
      lo <= hi &&
      (products[lo].length <= i || products[lo][i] !== searchWord[i])
    ) {
      lo++;
    }

    while (
      lo <= hi &&
      (products[hi].length <= i || products[hi][i] !== searchWord[i])
    ) {
      hi--;
    }

    let min = Math.min(lo + 3, hi + 1);
    let list = [];
    for (let j = lo; j < min; j++) {
      list.push(products[j]);
    }
    res.push(list);
  }

  return res;
}

// products: [ 'mobile', 'moneypot', 'monitor', 'mouse', 'mousepad' ]
console.log(
  solve(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")
);

// Output: [
//   ["mobile", "moneypot", "monitor"],
//   ["mobile", "moneypot", "monitor"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"],
//   ["mouse", "mousepad"]
// ]
