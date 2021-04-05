// 863. All Nodes Distance K in Binary Tree
// Medium

// 3381

// 69

// Add to List

// Share
// We are given a binary tree (with root node root), a target node, and an integer value K.

// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

// Output: [7,4,1]

// Explanation:
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.

// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  3,
  new Node(5, new Node(6), new Node(2, new Node(7), new Node(4))),
  new Node(1, new Node(0), new Node(8))
);

function s(root, target, k) {
  const map = {};
  let start;
  makeGraph(root, null);
  if (!start || !map[start.val]) return [];
  const q = [[start, 0]];
  const res = [];
  const set = new Set();
  set.add(start);
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const [node, lvl] = q.shift();
      if (lvl > k) break;
      if (lvl === k) res.push(node.val);
      for (let neighbor of map[node.val]) {
        if (!set.has(neighbor)) {
          set.add(neighbor);
          q.push([neighbor, lvl + 1]);
        }
      }
    }
  }
  return res;

  function makeGraph(root, parent) {
    if (!root) return;
    if (parent) {
      map[parent.val] ? map[parent.val].push(root) : (map[parent.val] = [root]);
      map[root.val] ? map[root.val].push(parent) : (map[root.val] = [parent]);
    }
    if (root.val === target) start = root;
    makeGraph(root.left, root);
    makeGraph(root.right, root);
  }
}

console.log(s(a, 5, 2));
console.log(s(new Node(1), 1, 3));
console.log(s(a, 7, 4));
