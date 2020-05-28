// merge two sorted lists
const { Node } = require("./index");

const a = new Node(1);
const b = new Node(3);

const c = new Node(2);
const d = new Node(4);
const e = new Node(5);

a.next = b;
c.next = d;
d.next = e;

function solve(head1, head2) {
  let head = new Node(null);
  let temp = head;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      head.next = head1;
      head1 = head1.next;
    } else {
      head.next = head2;
      head2 = head2.next;
    }
    head = head.next;
  }

  if (head1) {
    head.next = head1;
  }

  if (head2) {
    head.next = head2;
  }

  return temp.next;
}

function print(head) {
  let out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

console.log(print(solve(a, c)));
