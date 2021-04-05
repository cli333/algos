// 86. Partition List
// Medium

// 1816

// 363

// Add to List

// Share
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example 1:

// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:

// Input: head = [2,1], x = 2
// Output: [1,2]

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const f = new Node(2);
const e = new Node(5, f);
const d = new Node(2, e);
const c = new Node(3, d);
const b = new Node(4, c);
const a = new Node(1, b);

function s(head, x) {
  let beforeHead = new Node(null);
  let before = beforeHead;
  let afterHead = new Node(null);
  let after = afterHead;

  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }

    head = head.next;
  }

  after.next = null;
  before.next = afterHead.next;
  return beforeHead.next;
}

function print(node) {
  const list = [];
  while (node) {
    list.push(node.val);
    node = node.next;
  }
  return list;
}

console.log(print(a));
console.log(print(s(a, 3)));
