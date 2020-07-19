// Convert a BST to a sorted circular doubly - linked list in -place.Think of the left and right pointers as synonymous to the previous and next pointers in a doubly - linked list.

// We want to transform this BST into a circular doubly linked list.Each node in a doubly linked list has a predecessor and successor.For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

//   Specifically, we want to do the transformation in place.After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor.We should return the pointer to the first element of the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(4);
const b = new TreeNode(2);
const c = new TreeNode(5);
const d = new TreeNode(1);
const e = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

function sol(root) {
  // inorder traversal
  let pre = null;
  let head = null;
  const stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pre === null) {
      head = root;
    } else {
      pre.right = root;
      root.left = pre;
    }
    pre = root;
    root = root.right;
  }

  pre.right = head;
  head.left = pre;
  return head;
}

function sol2(node, head) {
  if (!node) return;
  let prev = null;
  sol2(node.left, head);
  if (!prev) {
    head = node;
  } else {
    node.left = prev;
    prev.right = node;
  }
  prev = node;
  sol2(node.right, head);
  return head;
}

// console.log(sol(a));
console.log(sol2(a, a));
