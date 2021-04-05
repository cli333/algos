// 23. Merge k Sorted Lists
// Hard

// 6816

// 348

// Add to List

// Share
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
const b = new Node(1, new Node(3, new Node(5, new Node(6, new Node(8)))));
const c = new Node(4, new Node(9, new Node(31, new Node(41, new Node(51)))));
const d = new Node(-1, new Node(2, new Node(30, new Node(40, new Node(50)))));

var mergeKLists = function (lists) {
  if (lists.length === 1) return lists[0];
  const m = Math.floor(lists.length / 2);
  const left = mergeKLists(lists.slice(0, m));
  const right = mergeKLists(lists.slice(m));
  return merge(left, right);

  function merge(l1, l2) {
    const dummy = new Node(0);
    let temp = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        temp.next = l1;
        temp = temp.next;
        l1 = l1.next;
      } else {
        temp.next = l2;
        temp = temp.next;
        l2 = l2.next;
      }
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;
    return dummy.next;
  }
};

var mergeKLists2 = function (lists) {
  while (lists.length >= 2) {
    const a = lists.pop();
    const b = lists.pop();
    lists.push(merge(a, b));
  }
  return lists[0];

  function merge(l1, l2) {
    const dummy = new Node(0);
    let temp = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        temp.next = l1;
        l1 = l1.next;
        temp = temp.next;
      } else {
        temp.next = l2;
        l2 = l2.next;
        temp = temp.next;
      }
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;
    return dummy.next;
  }
};

function print(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

// console.log(print(mergeKLists([a, b, c, d])));
console.log(print(a), print(b), print(c), print(d));
console.log(print(mergeKLists2([a, b, c, d])));
