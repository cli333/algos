function solve(A, B) {
  // check if one arr is a rotation of another

  if (A.length !== B.length) return false;

  // pick first num in A, find the num in B
  // start at B index and check against A index

  let a = 0;
  let b = B.indexOf(A[a]);

  if (b === -1) return false;

  while (a < A.length) {
    if (!B[b]) b = 0;

    if (A[a] === B[b]) {
      a++;
      b++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(solve([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]));
