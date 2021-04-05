// 92. Reverse Linked List II
// Medium

// 3294

// 169

// Add to List

// Share
// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Example:

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
const dummy = new Node(0);
let head = dummy;
for (let i = 1; i < 6; i++) {
  head.next = new Node(i);
  head = head.next;
}

function s(head, m, n) {
  //   const before = head;
  //   let prev = before;
  //   while (--m) {
  //     n--;
  //     prev = prev.next;
  //   }

  //   let node = prev.next;
  //   while (--n) {
  //     let next = node.next;
  //     node.next = next.next;
  //     next.next = prev.next;
  //     prev.next = next;
  //   }
  //   return before;

  //   const before = { next: head };
  //   let prev = before;

  //   while (--m) {
  //     prev = prev.next;
  //     --n;
  //   }

  //   let curr = prev.next;
  //   while (--n) {
  //     let next = curr.next;
  //     curr.next = next.next;
  //     next.next = prev.next;
  //     prev.next = next;
  //   }

  //   return before.next;

  let dummy = new Node(null, head);
  let node = dummy;

  while (--m) {
    n--;
    node = node.next;
  }

  let cur = node.next;
  let temp = cur.next;

  while (--n) {
    cur.next = temp.next;
    temp.next = node.next;
    node.next = temp;
    temp = cur.next;
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

console.log(print(dummy.next));
console.log(print(s(dummy.next, 2, 4)));
