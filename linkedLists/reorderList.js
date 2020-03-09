// given a ll
// 1-2-3-4 => 1-4-2-3
// 1,2,3,4,5 => 1,5,2,4,3

const { Node } = require("./index");

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reoder = head => {
  // separate into 2 lists
  // reverse second half/list
  // insert nodes from second into first

  let first = head;
  let second = head;

  while (second.next) {
    first = first.next;
    second = second.next.next;
  }

  second = reverse(first.next);
  first.next = null;
  first = head;

  while (second) {
    let temp = first.next;
    let temp2 = second.next;
    first.next = second;
    if (!temp) break;
    // weave together
    second.next = temp;
    first = temp;
    second = temp2;
  }

  return head;
};

function reverse(head) {
  let prev = null;
  let node = head;
  while (node) {
    let temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }

  return prev;
}

function print(head) {
  let out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

console.log("before", print(a));
console.log("after", print(reoder(a)));
