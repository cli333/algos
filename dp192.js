// max path sum
// given a binary tree, return the max path sum
// does not have to pass by the root

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  11,
  new Node(1, new Node(4, null, new Node(2))),
  new Node(2, new Node(5, null, new Node(3)), new Node(10))
);

const b = new Node(
  -11,
  new Node(1, new Node(4, null, new Node(2))),
  new Node(2, new Node(5, null, new Node(-3)), new Node(10))
);

function s(root) {
  let max = 0;
  helper(root);
  return max;

  function helper(root) {
    if (!root) return 0;
    const left = helper(root.left);
    const right = helper(root.right);
    // root vs. root + left vs. root + right OR the max of this subtree
    const maxFromTop = Math.max(root.val, root.val + left, root.val + right);
    // above max vs. root + left + right OR taking both left and right subtree
    const maxNoTop = Math.max(maxFromTop, root.val + left + right);

    max = Math.max(max, maxNoTop);
    // return the max of this subtree
    return maxFromTop;
  }
}

console.log(s(a));
console.log(s(b));
