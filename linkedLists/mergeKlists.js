const { Node } = require("./index");

// Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.

//   Example:

// Input:
// [
//   1 -> 4 -> 5,
//   1 -> 3 -> 4,
//   2 -> 6
// ]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

const a = new Node(1);
const b = new Node(4);
const c = new Node(5);
a.next = b;
b.next = c;

const d = new Node(1);
const e = new Node(3);
const f = new Node(4);
d.next = e;
e.next = f;

const g = new Node(2);
const h = new Node(6);
g.next = h;

function solve(lists) {
  let newList;

  for (let i = 1; i < lists.length; i++) {
    newList = merge(lists[i - 1], lists[i]);
  }

  return newList;

  function merge(head1, head2) {
    let out;
    if (!head1) return head2;
    if (!head2) return head1;
    if (head1.val < head2.val) {
      out = head1;
      head1.next = merge(head1.next, head2);
    } else {
      out = head2;
      head2.next = merge(head1, head2.next);
    }
    return out;
  }
}

function print(head, out = []) {
  if (!head) return out;
  out.push(head.val);
  return print(head.next, out);
}

console.log(print(solve([a, d, g])));
