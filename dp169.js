// check if balanced binary tree
// difference between left and right subtrees are at most 1

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  10,
  new Node(3, new Node(2, new Node(4, null, new Node(8))), new Node(13)),
  new Node(5, new Node(11))
);

const b = new Node(11, new Node(12), new Node(13, new Node(10)));

function s(root) {
  if (!root) return true;
  return (
    s(root.left) &&
    s(root.right) &&
    Math.abs(height(root.left) - height(root.right)) <= 1
  );
}

function height(root) {
  // time o(n)
  // space o(h), height of tree is the height of the call stack
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

console.log(s(a));
console.log(s(b));

function s2(root) {
  const res = helper(root);
  if (res < 0) {
    return false;
  } else {
    return true;
  }

  function helper(root) {
    if (!root) return 0;
    const left = helper(root.left);
    if (left === -1) return -1;
    const right = helper(root.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
  }
}

console.log(s2(a));
console.log(s2(b));

// function s3(root, height = 0) {
//   if (!root) return true;
//   let leftHeight = 0;
//   let rightHeight = 0;
//   const isLeftBalanced = s3(root.left, leftHeight);
//   const isRightBalanced = s3(root.right, rightHeight);
//   height = 1 + Math.max(leftHeight, rightHeight);
//   return (
//     isLeftBalanced && isRightBalanced && Math.abs(leftHeight - rightHeight) <= 1
//   );
// }

// console.log(s3(a));
// console.log(s3(b));
