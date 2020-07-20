// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

//   Examples 1:

// Input: [3, 9, 20, null, null, 15, 7]

//    3
//   /\
// /  \
// 9  20
//   /\
// /  \
// 15   7

// Output:

// [
//   [9],
//   [3, 15],
//   [20],
//   [7]
// ]
// Examples 2:

// Input: [3, 9, 8, 4, 0, 1, 7]

// 3
//   /\
// /  \
// 9   8
//   /\  /\
//     /  \/  \
// 4  01   7

// Output:

// [
//   [4],
//   [9],
//   [3, 0, 1],
//   [8],
//   [7]
// ]

const { Node } = require("./trees/index");

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

// new class with a horizontal distance property
class NNode extends Node {
  constructor(Node, hd = 0) {
    super(Node.val);
    this.left = Node.left;
    this.right = Node.right;
    this.hd = hd;
  }
}

function sol(root) {
  // calculate horizontal distance of each node
  // and put them in the same groups
  const res = [];
  const q = [];
  // hd : [root.val...]
  const map = {};
  if (!root) return res;
  q.push(new NNode(root, 0));
  let minHd = Infinity;
  let maxHd = 0;
  while (q.length) {
    const cur = q.shift();
    map[cur.hd] ? map[cur.hd].push(cur.val) : (map[cur.hd] = [cur.val]);
    minHd = Math.min(minHd, cur.hd);
    maxHd = Math.max(maxHd, cur.hd);
    if (cur.left) {
      q.push(new NNode(cur.left, cur.hd - 1));
    }

    if (cur.right) {
      q.push(new NNode(cur.right, cur.hd + 1));
    }
  }

  while (minHd <= maxHd) {
    res.push(map[minHd]);
    minHd++;
  }

  return res;
}

console.log(sol(a), [[9], [3, 15], [20], [7]]);
