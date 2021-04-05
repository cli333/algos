// 147. Insertion Sort List
// Medium

// 962

// 673

// Add to List

// Share
// Sort a linked list using insertion sort.

// A graphical example of insertion sort. The partial sorted list (black) initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list

// Algorithm of Insertion Sort:

// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function print(node) {
  const out = [];
  while (node) {
    out.push(node.val);
    node = node.next;
  }
  return out;
}

const a = new Node(4, new Node(2, new Node(1, new Node(3))));

function s(head) {
  const dummy = new Node(-Infinity, head);
  let node = head.next;
  let prev = dummy;
  while (node) {
    console.log(node.val);
    if (node.next && node.val > node.next.val) {
      while (prev.next && prev.next.val < node.next.val) {
        prev = prev.next;
      }
      const temp = prev.next;
      prev.next = node.next;
      node.next = node.next.next;
      prev.next.next = temp;
      prev = dummy;
    } else {
      node = node.next;
    }
  }
  return dummy.next;
}

console.log(print(a));
console.log(print(s(a)));
