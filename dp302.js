// 655. Print Binary Tree
// Medium

// 419

// 966

// Add to List

// Share
// Print a binary tree in an m*n 2D string array following these rules:

// The row number m should be equal to the height of the given binary tree.
// The column number n should always be an odd number.
// The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
// Each unused space should contain an empty string "".
// Print the subtrees following the same rules.
// Example 1:
// Input:
//      1
//     /
//    2
// Output:
// [["", "1", ""],
//  ["2", "", ""]]
// Example 2:
// Input:
//      1
//     / \
//    2   3
//     \
//      4
// Output:
// [["", "", "", "1", "", "", ""],
//  ["", "2", "", "", "", "3", ""],
//  ["", "", "4", "", "", "", ""]]

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(1, new Node(2, null, new Node(4)), new Node(3));

function s(root) {
  // max dimensions of binary tree, height x 2^height - 1
  const height = getHeight(root);
  const tree = [];
  for (let i = 0; i < height; i++) {
    tree.push(Array(Math.pow(2, height) - 1).fill(""));
  }
  fill(root, 0, 0, tree[0].length);

  return tree;

  function fill(root, row, l, r) {
    if (!root) return;
    const m = Math.floor((l + r) / 2);
    tree[row][m] = root.val;
    fill(root.left, row + 1, l, m);
    fill(root.right, row + 1, m, r);
  }

  function getHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  }
}

console.log(s(a));

function s2(root) {
  const h = maxHeight(root);
  const tree = [];
  for (let i = 0; i < h; i++) {
    tree.push(Array(Math.pow(2, h) - 1).fill(""));
  }
  bfs(root);
  return tree;

  function bfs(root) {
    const q = [{ root, row: 0, l: 0, r: tree[0].length }];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const n = q.shift();
        const {
          root: { val, left, right },
          row,
          l,
          r,
        } = n;
        const m = Math.floor((l + r) / 2);
        tree[row][m] = "" + val;
        if (left) q.push({ root: left, row: row + 1, l: l, r: m });
        if (right) q.push({ root: right, row: row + 1, l: m, r: r });
      }
    }
  }

  function maxHeight(root) {
    if (!root) return 0;
    return 1 + Math.max(maxHeight(root.left), maxHeight(root.right));
  }
}

console.log(s2(a));
