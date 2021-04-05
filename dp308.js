// 24. Swap Nodes in Pairs
// Medium

// 3446

// 209

// Add to List

// Share
// Given a linked list, swap every two adjacent nodes and return its head.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4))));

function s(head) {
  const dummy = new Node(0, head);
  let prev = dummy;
  let cur = head;
  while (cur && cur.next) {
    prev.next = cur.next;
    cur.next = cur.next.next;
    prev.next.next = cur;
    cur = cur.next;
    prev = prev.next.next;
  }
  return dummy.next;
}

function print(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

console.log(print(a));
console.log(print(s(a)));
