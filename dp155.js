// check if bst is height balanced

// diff in height between left and right subtree is no greater than 1

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// return -1 if no balance, else return the max height

function sol(root) {
  if (!root) return 0;

  const leftHeight = sol(root.left);
  if (leftHeight === -1) return -1;
  const rightHeight = sol(root.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return 1 + Math.max(leftHeight, rightHeight);

  //   function getHeight(node) {
  //     if (!node) return 0;
  //     return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  //   }
}

const a = new Node(5);
const b = new Node(4);
const c = new Node(3);

a.left = b;
b.left = c;

console.log(sol(a), false);

b.left = null;

console.log(sol(a), true);
