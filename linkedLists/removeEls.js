const { Node } = require("./index");

// remove all elemenst in a ll that have a val = (some val)

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("c");

a.next = b;
b.next = c;
c.next = d;

const rem = (head, val) => {
  while (head && head.val === val) {
    head = head.next;
  }

  let node = head;
  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};

const print = (head, out = []) => {
  if (!head) {
    return out;
  } else {
    out.push(head.val);
    return print(head.next, out);
  }
};

console.log(print(a));

console.log(print(rem(a, "c")));
