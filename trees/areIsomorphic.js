// check if two trees are isomorphic

const iso = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  if (
    (iso(a.left, b.left) && iso(a.right, b.right)) ||
    (iso(a.left, b.right) && iso(a.right, b.left))
  )
    return true;
};
