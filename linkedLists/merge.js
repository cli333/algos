const { Node } = require('./index');

// merge, splice two lists, return new list

const a = new Node(1);
const b = new Node(3);

const c = new Node(2);
const d = new Node(4);
const e = new Node(5);

a.next = b;
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

const merge = (head1, head2) => {
	let temp = new Node(null);
	let head = temp;

	while (head1 && head2) {
		head.next = head1;
		head = head.next;
		head.next = head2;
		head = head.next;
		head1 = head1.next;
		head2 = head2.next;
	}

	if (head1) {
		head.next = head1;
	}
	if (head2) {
		head.next = head2;
	}

	return temp.next;
};

console.log(print(merge(a, c)));

// merge, compare values

const merge2 = (head1, head2) => {
	let temp = new Node(null);
	let head = temp;

	while (head1 && head2) {
		if (head1.val < head2.val) {
			head.next = head1;
			head1 = head1.next;
		} else if (head2.val < head1.val) {
			head.next = head2;
			head2 = head2.next;
		}
		head = head.next;
	}

	if (head1) {
		head.next = head1;
	}
	if (head2) {
		head.next = head2;
	}

	return temp.next;
};

console.log(print(merge2(a, c)));
