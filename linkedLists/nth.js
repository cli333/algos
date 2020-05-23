const { Node } = require("./index");

// find nth from tail

const a = new Node(5);
const b = new Node(4);
const c = new Node(3);
const d = new Node(2);
const e = new Node(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function solve(head, n) {
  let node = head;
  let node2 = head;

  while (node2 && n) {
    node2 = node2.next;
    n--;
  }

  if (n > 0) return null;

  while (node2.next) {
    node = node.next;
    node2 = node2.next;
  }

  return node;
}

console.log(solve(a, 4));
