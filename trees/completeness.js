const { Node } = require("./index");

// check if all levels except the last are completely filled
// and all nodes on the last level are filled to the left as far as possible

const a = new Node(10);
const b = new Node(3);
const c = new Node(12);
const d = new Node(2);
const e = new Node(5);
const f = new Node(2);

a.left = b;
a.right = c;
c.right = d;
c.left = null;
b.left = f;
b.right = e;

// traverse the list breadth first
// the first null node we see, should be the last node => true
// if not => false
// set a bool to when we see a null node

const complete = root => {
  let q = [root];
  let end = false;

  while (q.length) {
    let node = q.shift();
    if (!node) {
      // seen first null
      // should never see another null
      end = true;
    } else {
      // in case node not null
      // if seen a null node or (end === true) return false
      if (end === true) return false;
      // push both left and right here, don't check if they're valid
      // need to push null nodes
      q.push(node.left);
      q.push(node.right);
    }
  }

  return true;
};

console.log(complete(a));
