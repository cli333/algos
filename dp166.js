class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
c.left = new Node("a", new Node("a1"), new Node("a2"));
c.right = new Node("d", new Node("d1"));
b.left = d;
b.right = e;
e.right = f;
f.left = new Node("last");

function sol(root) {
  //   const temp = [root, null];
  //   const out = [[]];
  //   while (temp.length > 1) {
  //     const node = temp.shift();
  //     if (!node) {
  //       temp.push(null);
  //       out.push([]);
  //     } else {
  //       out[out.length - 1].push(node.val);
  //       if (node.left) temp.push(node.left);
  //       if (node.right) temp.push(node.right);
  //     }
  //   }

  //   return out;
  const temp = [{ root, lvl: 0 }];
  const out = [];
  while (temp.length) {
    const node = temp.shift();
    const {
      root: { val, left, right },
      lvl,
    } = node;
    out[lvl] ? out[lvl].push(val) : (out[lvl] = [val]);
    if (left) temp.push({ root: left, lvl: lvl + 1 });
    if (right) temp.push({ root: right, lvl: lvl + 1 });
  }
  return out;
}

console.log(sol(a));

// bst right side view

function sol2(root) {
  const temp = [root, null];
  const out = [];
  while (temp.length > 1) {
    const node = temp.shift();
    if (!node) {
      temp.push(null);
    } else {
      if (temp[0] === null) {
        out.push(node.val);
      }
      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }
  }
  return out;
}

console.log(sol2(a));

function s(root) {
  const q = [{ ...root, lvl: 0 }];
  const out = [];
  while (q.length) {
    const node = q.shift();
    if (out[node.lvl]) {
      out[node.lvl].push(node.val);
    } else {
      out[node.lvl] = [node.val];
    }

    if (node.left) {
      q.push({ ...node.left, lvl: node.lvl + 1 });
    }
    if (node.right) {
      q.push({ ...node.right, lvl: node.lvl + 1 });
    }
  }
  return out;
}

console.log(s(a));
