// flip a bst

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(10);
const b = new Node(4);
const c = new Node(3);
const d = new Node(15);
const e = new Node(13);
a.left = b;
b.left = c;
a.right = d;
d.left = e;

function sol(root) {
  helper(root);

  return root;

  function helper(root) {
    if (!root) return;
    [root.left, root.right] = [root.right, root.left];
    helper(root.left);
    helper(root.right);
  }
}

console.log(sol(a));
