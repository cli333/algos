// sort LL in place

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const a = new Node(1);
const c = new Node(3);
const d = new Node(2);
const e = new Node(-1);
a.next = c;
c.next = d;
d.next = e;

function s(head) {
  return msort(head);

  function msort(head) {
    if (!head || !head.next) return head;
    let temp = head;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      temp = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    temp.next = null;
    const left = msort(head);
    const right = msort(slow);
    return merge(left, right);
  }

  function merge(a, b) {
    const dummy = new Node(0);
    let cur = dummy;
    while (a && b) {
      if (a.val < b.val) {
        cur.next = a;
        a = a.next;
      } else {
        cur.next = b;
        b = b.next;
      }
      cur = cur.next;
    }
    if (a) {
      cur.next = a;
    }
    if (b) {
      cur.next = b;
    }
    return dummy.next;
  }
}

function print(head) {
  const out = [];
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

function s2(head) {
  let realHead = head;
  while (head) {
    let temp = head;
    while (temp.next) {
      if (temp.val > temp.next.val) {
        [temp.val, temp.next.val] = [temp.next.val, temp.val];
      }
      temp = temp.next;
    }
    head = head.next;
  }
  return realHead;
}

console.log(print(a));
// console.log(print(s(a)));
console.log(print(s2(a)));
