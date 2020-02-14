const { Node } = require("./index");

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
b.left = f;
b.right = e;

// find a path in tree with a given sum

let res = 0;
let stack = [];

const sum = (root, target) => {
  // push root to stack
  // add to sum
  // if sum = target return stack
  //
  // inorder traverse, root.left, root.right
  //
  // if escape traverse block {}
  // sum -= stack.pop()

  if (!root) return;
  res += root.val;
  stack.push(root.val);
  console.log(stack, target, res);
  if (res === target) return stack;

  sum(root.left, target);
  sum(root.right, target);

  res -= stack.pop();
};

sum(a, 15);
