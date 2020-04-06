const { Node } = require("./index");

// delete a node in singly ll (except tail), given only access to that node

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const del = (node) => {
  // set node to node.next
  // set node.next to node.next.next
  node.val = node.next.val;
  node.next = node.next.next;
};

const print = (head) => {
  let out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
};

console.log(print(a));

del(b);

console.log(print(a));
