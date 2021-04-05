// 82. Remove Duplicates from Sorted List II
// Medium

// 2801

// 123

// Add to List

// Share
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

const a = new Node(1, new Node(1, new Node(1, new Node(2, new Node(3)))));

function s(head) {
  const dummy = new Node(null, head);
  let cur = dummy;
  while (head) {
    if (head.next && head.val === head.next.val) {
      while (head.next && head.val === head.next.val) head = head.next;
      cur.next = head.next;
    } else {
      cur = cur.next;
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
