// 83. Remove Duplicates from Sorted List
// Easy

// 2404

// 143

// Add to List

// Share
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

const a = new Node(1, new Node(1, new Node(1, new Node(2, new Node(3)))));

function s(head) {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}
