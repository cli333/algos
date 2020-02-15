const { Node } = require('./index');

// group all odd nodes followed by even nodes
// node indexes not values

// 1-2-3-4-5 => 1-3-5-2-4

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const print = head => {
	let out = [];
	while (head) {
		out.push(head.val);
		head = head.next;
	}
	return out;
};

const group = head => {
	if (!head) return head;
	// separate into 2 linked lists
	// and combine

	let odd = head;
	let even = head.next;
	let evenhead = even;

	while (even && even.next) {
		odd.next = odd.next.next;
		odd = odd.next;
		even.next = even.next.next;
		even = even.next;
	}

	odd.next = evenhead;
	return head;
};

console.log(print(a));
console.log(print(group(a)));
