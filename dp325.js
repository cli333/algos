// 61. Rotate List
// Medium

// 2213

// 1146

// Add to List

// Share
// Given the head of a linked list, rotate the list to the right by k places.

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
const b = new Node(1, new Node(2));

function s(head, k) {
  //   // make circular
  //   let p1 = head;
  //   while (p1.next) {
  //     p1 = p1.next;
  //   }
  //   p1.next = head;
  //   let tail = null;
  //   let newHead = head;
  //   while (k) {
  //     tail = newHead;
  //     newHead = newHead.next;
  //     k--;
  //   }
  //   tail.next = null;
  //   return newHead;
  if (!head || !k) return head;
  let len = 0;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  len++;
  tail.next = head;
  let rotatePoint = len - (k % len);
  tail = head;
  while (rotatePoint-- > 1) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
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

console.log(print(s(a, 2)));
console.log(print(s(b, 1)));
