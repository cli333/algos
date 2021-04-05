// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const g = new Node(5);
const f = new Node(4, g);
const e = new Node(4, f);
const d = new Node(3, e);
const c = new Node(3, d);
const b = new Node(2, c);
const a = new Node(1, b);

function s(head) {
  let node = head;
  while (node) {
    while (node.next && node.val === node.next.val) {
      node.next = node.next.next;
    }
    node = node.next;
  }
  return head;
}

function print(head) {
  const list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }
  return list;
}

console.log(print(a));

console.log(print(s(a)));
