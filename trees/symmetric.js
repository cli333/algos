// is tree symmetric

const { Node } = require('./index');

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

const e = new Node('b');
const f = new Node('c');

a.left = b;
b.left = c;
a.right = e;
e.right = f;

const sym = (root1, root2) => {
	if (!root1 && !root2) return true;
	if (!root1 || !root2) return false;
	return root1.val === root2.val && sym(root1.left, root2.right) && sym(root1.right, root2.left);
};

console.log(sym(a, a));
