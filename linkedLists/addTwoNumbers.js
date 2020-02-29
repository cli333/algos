const { Node } = require("./index");

// add two linked lists
// 2-4-3 + 5-6-4 => 7-0-8

const a = new Node(2);
const b = new Node(4);
const c = new Node(3);

const d = new Node(5);
const e = new Node(6);
const f = new Node(4);

a.next = b;
b.next = c;
d.next = e;
e.next = f;
f.next = new Node(9);

const print = (head, out = []) => {
  if (!head) return out.join("-");
  out.push(head.val);
  return print(head.next, out);
};

const add2 = (m, n) => {
  // return new list
  console.log(`${print(m)} + ${print(n)}`);
  let head = new Node(null);
  let l1 = head;
  let remainder = 0;

  while (m || n) {
    let mVal = m ? m.val : 0;
    let nVal = n ? n.val : 0;
    let sum = mVal + nVal + remainder;
    remainder = Math.floor(sum / 10);
    head.next = new Node(sum % 10);
    head = head.next;
    if (m) m = m.next;
    if (n) n = n.next;
  }

  if (remainder) {
    head.next = new Node(remainder);
  }

  return l1.next;
};

console.log(print(add2(a, d)));
