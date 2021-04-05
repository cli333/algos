// 148. Sort List
// Medium

// 3916

// 168

// Add to List

// Share
// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

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
const b = new Node(4, new Node(2, new Node(1, new Node(3, new Node(-11)))));

function s(head) {
  // merge sort a linked list
  return mergeSort(head);

  function mergeSort(head) {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head;
    let temp = head;
    while (fast && fast.next) {
      temp = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    temp.next = null;
    const left = mergeSort(head);
    const right = mergeSort(slow);
    return merge(left, right);

    function merge(a, b) {
      const dummy = new Node(-Infinity);
      let temp = dummy;
      while (a && b) {
        if (a.val < b.val) {
          temp.next = a;
          a = a.next;
        } else {
          temp.next = b;
          b = b.next;
        }
        temp = temp.next;
      }
      if (a) temp.next = a;
      if (b) temp.next = b;
      return dummy.next;
    }
  }
}

console.log(print(a));
console.log(print(s(a)));

// function s2(head) {
//   return mergeSort(head, null);

//   function mergeSort(start, end) {
//     if (!start || !start.next || start === end) return start;
//     let slow = start;
//     let fast = start;
//     while (fast && fast.next && fast.next.next !== end) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     console.log({ start, slow, fast, end });
//     mergeSort(start, slow);
//     mergeSort(slow.next, end);
//     // return merge(mergeSort(start, slow), mergeSort(slow, end));

//     function merge(a, b) {
//       const dummy = new Node(-Infinity);
//       let temp = dummy;
//       while (a && b) {
//         if (a.val < b.val) {
//           temp.next = a;
//           a = a.next;
//         } else {
//           temp.next = b;
//           b = b.next;
//         }
//         temp = temp.next;
//       }
//       if (a) temp.next = a;
//       if (b) temp.next = b;
//       return dummy.next;
//     }
//   }
// }

// console.log(print(b));
// console.log(print(s2(b)));
