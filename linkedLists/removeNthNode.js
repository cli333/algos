const { Node } = require("./index");

// remove nth node from the end of the list
// return the head

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

// a b c d e

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const remove = (head, n) => {
  let a = head;
  let b = head;

  while (n && b) {
    b = b.next;
    n--;
  }
  b = b.next;

  while (b.next) {
    a = a.next;
    b = b.next;
  }

  let temp = a.next;
  a.next = a.next.next;
  temp.next = null;
  return head;
};

function print(head, out = []) {
  if (!head) return out;
  out.push(head.val);
  return print(head.next, out);
}

console.log(print(remove(a, 3)));
