// 199. Binary Tree Right Side View
// Medium

// 3710

// 200

// Add to List

// Share
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  1,
  new Node(2, null, new Node(5)),
  new Node(3, null, new Node(4))
);

function s(root) {
  // bfs
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      if (i === len - 1) res.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }
  return res;
}

console.log(s(a), [1, 3, 4]);
