// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

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
  let dummy = new Node(null, head);
  let prev = dummy;

  while (head) {
    if (head.next && head.val === head.next.val) {
      // move head while head and head.next are same
      while (head.next && head.val === head.next.val) {
        head = head.next;
      }
      // set prev.next to head.next
      prev.next = head.next;
    } else {
      // else move prev
      prev = prev.next;
    }

    head = head.next;
  }
  return dummy.next;
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
