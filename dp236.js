// 116. Populating Next Right Pointers in Each Node
// Medium

// 3070

// 161

// Add to List

// Share
// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

// Example 1:

// Input: root = [1,2,3,4,5,6,7]
// Output: [1,#,2,3,#,4,5,6,7,#]
// Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

class Node {
  constructor(val, left = null, right = null, next = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

const a = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7))
);

function s(root) {
  //   const q = [root, null];
  //   let prev = null;
  //   while (q.length > 1) {
  //     const node = q.shift();
  //     if (!node) {
  //       q.push(null);
  //       prev = null;
  //     } else {
  //       if (prev) {
  //         prev.next = node;
  //       }
  //       prev = node;
  //       if (node.left) q.push(node.left);
  //       if (node.right) q.push(node.right);
  //     }
  //   }

  // preorder traversal
  if (!root || !root.left) {
    return root;
  }

  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;

  s(root.left);
  s(root.right);
  return root;
}

s(a);

function printLevel(node) {
  const out = [];
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}

console.log(printLevel(a));
console.log(printLevel(a.left));
console.log(printLevel(a.left.left));

// 117. Populating Next Right Pointers in Each Node II
// SOLUTION FOR NON-PERFECT BINARY TREE

const b = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, null, new Node(7))
);

function s2(root) {
  //   const q = [root, null];
  //   let prev = null;
  //   while (q.length > 1) {
  //     const node = q.shift();
  //     if (!node) {
  //       q.push(null);
  //       prev = null;
  //     } else {
  //       if (prev) {
  //         prev.next = node;
  //       }
  //       prev = node;
  //       if (node.left) q.push(node.left);
  //       if (node.right) q.push(node.right);
  //     }
  //   }

  if (!root) return null;
  let head = root;
  while (head) {
    const dummy = new Node(0);
    let temp = dummy;
    while (head) {
      if (head.left) {
        temp.next = head.left;
        temp = temp.next;
      }
      if (head.right) {
        temp.next = head.right;
        temp = temp.next;
      }
      head = head.next;
    }
    head = dummy.next;
  }
  return root;
}

s2(b);
console.log(printLevel(b));
console.log(printLevel(b.left));
console.log(printLevel(b.left.left));
