// remove duplicates in a sorted linked list

const { Node } = require("./index");

const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(2);
const e = new Node(3);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const remove = (head) => {
  let node = head;
  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};

const print = (head, out = []) => {
  if (!head) return out;
  out.push(head.val);
  return print(head.next, out);
};

console.log(print(remove(a))); // 1-2-3
