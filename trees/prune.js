const { Node } = require("./index");

// binary tree that contains only 1 and 0
// remove every subtree that doesn't contain a 1

const a = new Node(0);
const b = new Node(1);
const c = new Node(0);
const d = new Node(0);
const e = new Node(0);
const f = new Node(1);

a.right = c;
a.left = b;
c.right = d;
d.left = e;
d.right = f;

const prune = root => {
  if (!root) return;
  containsOne(root);
  return root;
};

function containsOne(root) {
  if (!root) return false;
  let leftContains = containsOne(root.left);
  let rightContains = containsOne(root.right);

  if (!leftContains) root.left = null;
  if (!rightContains) root.right = null;

  return root.val === 1 || leftContains || rightContains;
}

console.log(prune(a));
