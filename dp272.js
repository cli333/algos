// 160. Intersection of Two Linked Lists
// Easy

// 5240

// 588

// Add to List

// Share
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:

// It is guaranteed that there are no cycles anywhere in the entire linked structure.

// Note that the linked lists must retain their original structure after the function returns.

function s(a, b) {
  // get lengths of both lists
  // find longer list, move head until difference is zero
  // move along both lists until reach intersection
  const l1 = findLength(a);
  const l2 = findLength(b);
  const diff = l1 > l2 ? l1 - l2 : l2 - l1;
  let n1 = a;
  let n2 = b;
  if (l1 > l2) {
    while (diff) {
      n1 = n1.next;
      diff--;
    }

    return null;
  } else {
    while (diff) {
      n2 = n2.next;
      diff--;
    }
  }
  while (n1 && n2) {
    if (n1 === n2) return n1;
    n1 = n1.next;
    n2 = n2.next;
  }
  return null;

  function findLength(head) {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }
}
