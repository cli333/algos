// min depth of binary search tree

var minDepth = function (root) {
  if (!root) return 0;
  const left = minDepth(root.left);
  const right = minDepth(root.right);
  return !left || !right ? left + right + 1 : 1 + Math.min(left, right);
};
