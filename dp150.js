// find largest node to the right for each node in the linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(6);
const b = new Node(2);
a.next = b;
const c = new Node(5);
b.next = c;
const d = new Node(4);
c.next = d;
const e = new Node(3);
d.next = e;

// 6,2,5,4,3

function sol(head) {
  const stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  let max = null;
  while (stack.length) {
    const node = stack.pop();
    console.log(`largest to right of ${node} is ${max}`);
    if (!max || node > max) {
      max = node;
    }
  }

  // or can reverse the list
}

console.log(sol(a));
