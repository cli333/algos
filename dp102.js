// all nodes K distance from start node in a bst

const { Node } = require("./trees/index");

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
c.right = f;
b.left = d;
b.right = e;
d.left = g;
d.right = h;
g.left = i;

function sol(start, root, k) {
  const visited = new Set();
  const q = [start];
  visited.add(start.val);

  while (k) {
    let len = q.length;
    while (len) {
      const node = q.shift();
      const left = node.left;
      const right = node.right;
      const parent = findParent(root, node);
      if (left && !visited.has(left.val)) {
        q.push(left);
        visited.add(left.val);
      }
      if (right && !visited.has(right.val)) {
        q.push(right);
        visited.add(right.val);
      }
      if (parent && !visited.has(parent.val)) {
        q.push(parent);
        visited.add(parent.val);
      }
      len--;
    }
    k--;
  }

  return q;
}

function findParent(root, target) {
  if (!root || (!root.left && !root.right) || root === target) return null;
  if (root.left === target || root.right === target) return root;
  return findParent(root.left, target) || findParent(root.right, target);
}

console.log(sol(d, a, 2).map((node) => node.val));
