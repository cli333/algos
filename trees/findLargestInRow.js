const { Node } = require("./index");

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
c.left = d;
c.right = e;
b.right = f;

// 1
// 2 3
// 4 5 6

// find the largest value in each level
const largest = root => {
  const q = [root, "s"];
  let out = [0];

  while (q.length > 1) {
    let node = q.shift();
    if (node === "s") {
      out.push(0);
      q.push("s");
    } else {
      out[out.length - 1] = Math.max(out[out.length - 1], node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }
  return out;
};

console.log(largest(a));

// recursive
const large2 = root => {
  const out = [];
  helperMethod(root, out, 0);
  return out;
};

function helperMethod(root, list, level) {
  if (!root) return;
  if (level === list.length) {
    list.push(root.val);
  } else {
    list[level] = Math.max(list[level], root.val);
  }
  helperMethod(root.left, list, level + 1);
  helperMethod(root.right, list, level + 1);
}

console.log(large2(a));
