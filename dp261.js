// 143. Reorder List
// Medium

// 2907

// 141

// Add to List

// Share
// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4))));
const b = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

function print(node) {
  const out = [];
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}

function reverse(head) {
  let prev = null;
  while (head) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}

function s(head) {
  //   let slow = head;
  //   let fast = head;
  //   while (fast && fast.next) {
  //     slow = slow.next;
  //     fast = fast.next.next;
  //   }
  //   const stack = [];
  //   while (slow) {
  //     stack.push(slow);
  //     slow = slow.next;
  //   }
  //   slow = head;
  //   let temp = slow.next;
  //   while (stack.length) {
  //     slow.next = stack.pop();
  //     slow.next.next = temp;
  //     slow = temp;
  //     temp = slow.next;
  //   }
  //   if (slow.next) slow.next.next = null;
  //   return head;
  //
  // 2nd solution: reverse second half and merge the two lists
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let temp;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let n1 = head;
  let n2 = prev;
  while (n2.next) {
    temp = n1.next;
    n1.next = n2;
    n1 = temp;

    temp = n2.next;
    n2.next = n1;
    n2 = temp;
  }

  return head;
}

console.log(print(a));
console.log(print(s(a)));
console.log(print(b));
console.log(print(s(b)));
