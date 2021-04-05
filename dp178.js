// lowest common ancestor
// find deepest node that has both n1 and n2 as descendants

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(
  1,
  new Node(3, new Node(5), new Node(7)),
  new Node(4, null, new Node(12))
);

function s(root, n1, n2) {
  // time o(n)
  // space o(h)

  const path1 = [];
  const path2 = [];
  if (!getPath(root, path1, n1) || !getPath(root, path2, n2)) return false;
  const minLength = Math.min(path1.length, path2.length);
  let i = 0;
  while (i < minLength) {
    if (path1[i].val === path2[i].val) {
      i++;
    } else {
      break;
    }
  }
  return path1[i - 1];

  function getPath(root, path = [], num) {
    if (!root) return false;
    path.push(root);
    if (root.val === num) return true;
    const left = getPath(root.left, path, num);
    const right = getPath(root.right, path, num);
    if (left || right) return true;
    path.pop();
    return false;
  }
}

function s2(root, n1, n2) {
  if (!root) return;
  if (root.val === n1 || root.val === n2) return root;

  const left = s2(root.left, n1, n2);
  const right = s2(root.right, n1, n2);
  if (left && right) return root;

  if (left) return left;
  if (right) return right;
}

console.log(s(a, 3, 4).val);

console.log(s2(a, 7, 5).val);
