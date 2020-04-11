// Write a program to find the node at which the intersection of two singly linked lists begins.

const { Node } = require("./index");

const a = new Node(4);
const b = new Node(6);
const c = new Node(8);
const d = new Node(11);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const a1 = new Node(5);
const b1 = new Node(0);
const c1 = new Node(1);
const d1 = new Node(8);
const e1 = new Node(4);
const f1 = new Node(10);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = f1;

// Input: intersectVal = 8, listA = [4, 1, 8, 4, 5], listB = [5, 0, 1, 8, 4, 5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A,
// it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3
// nodes before the intersected node in B.

const inter = (head1, head2) => {
  // two pointers
  // when shorter reaches end, set pointer to head of longer
  // when longer reaches end, set pointer to head of shorter
  let a = head1;
  let b = head2;
  let loops = 0;

  while (a.val !== b.val) {
    if (!a.next) {
      a = head2;
      loops++;
    } else {
      a = a.next;
    }

    if (!b.next) {
      b = head1;
    } else {
      b = b.next;
    }

    if (loops > 2) {
      return "no intersects";
    }
  }

  return { a, b };
};

console.log(inter(a, a1)); // 8
