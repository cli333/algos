// given a linked list of integers, create a boolena function that checks
// if it's a palindrome linked list in constant space complexity

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function sol(head) {
  // split list in half
  // reverse second half
  // compare the two lists
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;

  function reverse(head) {
    let prev = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }

    return prev;
  }
}

const a = new Node(1);
const b = new Node(2, a);
const c = new Node(3, b);
const d = new Node(4, c);
const e = new Node(3, d);
const f = new Node(2, e);
const g = new Node(1, f);

console.log(flat(g));
console.log(sol(g));

const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
const D = new Node(2);
const E = new Node(1);

A.next = B;
B.next = C;
C.next = D;
D.next = E;

function s(head) {
  let first = head;
  let second = head;
  while (second && second.next) {
    first = first.next;
    second = second.next.next;
  }

  second = reverse(first);
  first = head;

  while (first && second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;

  function reverse(head) {
    let prev = null;
    while (head) {
      let next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
}

function flat(head, out = []) {
  if (!head) return out;
  out.push(head.val);
  return flat(head.next, out);
}

console.log(flat(A));
console.log(s(A));
