// sort a linked list in o(nlogn) time using o(1) space

const { Node } = require("./index");

const a = new Node(1);
const b = new Node(3);
const c = new Node(2);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const sort = head => {
  if (!head || !head.next) return head;
  let temp = head;
  let slow = head;
  let fast = head;

  // split list in half
  // after
  // head = first list -> head
  // temp = fist list -> tail
  // slow = second list -> head
  // fast = second list -> tail

  // split list in two
  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  temp.next = null;

  let leftSide = sort(head);
  let rightSide = sort(slow);

  return merge(leftSide, rightSide);

  function merge(head1, head2) {
    let sortedHead = new Node(0);
    let currentNode = sortedHead;
    while (head1 && head2) {
      if (head1.val < head2.val) {
        currentNode.next = head1;
        head1 = head1.next;
      } else {
        currentNode.next = head2;
        head2 = head2.next;
      }
      currentNode = currentNode.next;
    }
    if (head1) {
      currentNode.next = head1;
      head1 = head1.next;
    }
    if (head2) {
      currentNode.next = head2;
      head2 = head.next;
    }
    return sortedHead.next;
  }
};

function print(head) {
  let out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

console.log(print(a));
console.log(print(sort(a)));
