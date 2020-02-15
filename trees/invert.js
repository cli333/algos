const { Node } = require('./index');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.left = b;
a.right = c;
c.left = d;

// invert a tree

const inv = root => {
	[root.left, root.right] = [root.right, root.left];
	if (root.left) {
		inv(root.left);
	}
	if (root.right) {
		inv(root.right);
	}
};

// inv(a);
// console.log(a);

const inv2 = root => {
	if (!root) return root;
	let left = inv2(root.left);
	let right = inv2(root.right);

	// swap here
	root.right = left;
	root.left = right;

	return root;
};

console.log(inv2(a));
