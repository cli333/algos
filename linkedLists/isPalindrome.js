const { Node } = require('./index');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('b');
const e = new Node('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverse = head => {
	let prev = null;

	while (head) {
		let temp = head.next;
		head.next = prev;
		prev = head;
		head = temp;
	}

	return prev;
};

// is list a palindrome

const isPal = head => {
	let slow = head;
	let fast = head;

	// fix for odd/even linked lists?
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	fast = head;
	slow = reverse(slow);

	while (slow) {
		if (slow.val !== fast.val) return false;
		slow = slow.next;
		fast = fast.next;
	}

	return true;
};

console.log(isPal(a));
