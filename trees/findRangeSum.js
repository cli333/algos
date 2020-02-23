// return the sum of values of all nodes with values between L and R (inclusive)

const { Node } = require("./index");

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
c.right = d;
b.left = f;
b.right = e;

const findRangeSum = (root, l, r) => {
  let sum = 0;
  (function trav(root, l, r) {
    if (!root) return;
    if (root.val >= l && root.val <= r) {
      sum += root.val;
    }
    if (root.val > l) {
      trav(root.left, l, r);
    }
    if (root.val < r) {
      trav(root.right, l, r);
    }
  })(root, l, r);
  return sum;
};

console.log(findRangeSum(a, 2, 3));

// add a conditional if, if the value of node we are traversing is greater than the range, skip its right children
// if value of node is less than range, skip its left children

const find2 = (root, l, r) => {
  let stack = [root];
  let sum = 0;
  while (stack.length) {
    let node = stack.pop();
    if (node && node.val >= l && node.val <= r) sum += node.val;
    if (node && node.val > l) stack.push(node.left);
    if (node && node.val < r) stack.push(node.right);
  }
  return sum;
};

console.log(find2(a, 2, 3));
