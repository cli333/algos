const { Node } = require('./index');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
b.left = c;

d.left = e;
d.right = f;

// merge two trees
// overlap the trees

const merge = (root1, root2) => {
	if (!root1) {
		return root2;
	}

	if (!root2) {
		return root1;
	}

	// mutates first tree
	root1.val += root2.val;
	root1.left = merge(root1.left, root2.left);
	root1.right = merge(root1.right, root2.right);

	return root1;
};

console.log(merge(a, d));
