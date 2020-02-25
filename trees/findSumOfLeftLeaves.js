const { Node } = require("./index");

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(7);

a.left = b;
a.right = c;
c.left = d;
b.left = f;
b.right = e;

// find sum of left leaves

const findSum = root => {
  let sum = 0;
  trav(root);
  return sum;

  function trav(root) {
    if (!root) return;
    if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val;
    }
    trav(root.left);
    trav(root.right);
  }
};

// console.log(findSum(a));

const find2 = root => {
  if (!root) return 0;
  let sum = 0;
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      sum += root.left.val;
    } else {
      sum += find2(root.left);
    }
  }
  if (root.right) {
    if (root.right.left || root.right.right) {
      sum += find2(root.right);
    }
  }
  return sum;
};

// console.log(find2(a));

const find3 = root => {
  let stack = [root];
  let sum = 0;

  while (stack.length) {
    let node = stack.pop();
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      } else {
        stack.push(node.left);
      }
    }
    if (node.right) {
      if (node.right.left || node.right.right) {
        stack.push(node.right);
      }
    }
  }
  return sum;
};

console.log(find3(a));
