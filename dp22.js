// Question: Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Define G(n): the number of unique BST for a sequence of length n.

//   G(0) = 1
// G(1) = 1

// For each element, we can place it and recurse on the left an right not including that number we choose to root that subtree.

// Define F(i, n): the number of unique BST, where the number i is served as the root of BST(1 is less than or equal to i which is less than or equal to n).

//   G(n) = the summation from 1 to n of F(i, n)

// When we choose an element to root a subtree from the possible elements to root there, we split the possibilities into a left and a right of the original enumeration.

//   Example:

// n = 5 aka[1, 2, 3, 4, 5]

// When evaluating F(3, 5) we will have
// a left subtree with [1, 2] aka G(2)
// a right subtree with [4, 5] aka G(2)

// G(n) evaluates the # of unique trees we can construct from a total of n possible values, regardless of what those values are.

// The Realization

// We notice that F(i, n) = G(i - 1) * G(n - i)

// To get F(i, n) we are considering all combinations of left tree possibilities with all of the right tree possibilities.

// These exhaustive pairings between two sets of items is called a cartesian product.

// Now we have a new way to express F(i, n)
// F(i, n) = G(i - 1) * G(n - i)

// G(n) = summation from 1 to n of G(i - 1) * G(n - i)

// This now can be solved with DP via top - down recursion or bottom up.

// For each G(n) up to our requested n we will solve the G(n) summation equation.

// At the end we return the G(n) requested which by the end we will have an answer for.

const { Node } = require("./trees/index");

function sol(n) {
  // 1, ... n
  // loop through each n as root
  return gen(1, n);

  function gen(start, end) {
    if (start > end) return [null];

    let res = [];

    for (let root = start; root <= end; root++) {
      let lefts = gen(start, root - 1);
      for (let left of lefts) {
        let rights = gen(root + 1, end);
        for (let right of rights) {
          let newRoot = new Node(root);
          newRoot.left = left;
          newRoot.right = right;
          res.push(newRoot);
        }
      }
    }

    return res;
  }
}

console.log(sol(3));
