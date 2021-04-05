// 19. Remove Nth Node From End of List
// Medium

// 4961

// 296

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

function s(head, n) {
  let slow = head;
  let fast = head;
  while (n) {
    fast = fast.next;
    n--;
  }
  let temp;
  while (fast) {
    temp = slow;
    slow = slow.next;
    fast = fast.next;
  }
  temp.next = slow.next;
  return head;
}

function print(head, res = []) {
  if (!head) return res;
  res.push(head.val);
  return print(head.next, res);
}

console.log(print(a));
console.log(print(s(a, 1)));
