/**
 * Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 * 
 * 
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);
const g = new Node(-10);
const h = new Node(11);
const i = new Node("i");

a.children = [b, c, d, e];
e.children = [f, g];
g.children = [h];
h.children = [i];

var maxDepth = function (root) {
  let q = [root];
  let d = 0;

  if (!root) return d;

  while (q.length) {
    let node = q.shift();
    if (!q.length) d++;
    q.push(...node.children);
  }

  return d;
};

const solve = (root) => {
  let d = 0;
  if (!root) return d;
  dfs(root, 1);
  return d;

  function dfs(node, depth) {
    if (!node) return;
    d = Math.max(depth, d);
    for (let child of node.children) {
      dfs(child, depth + 1);
    }
  }
};

console.log(maxDepth(a));
console.log(solve(a));
