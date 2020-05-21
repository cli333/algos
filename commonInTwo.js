function solve(arr1, arr2) {
  // return common elements
  // const map = arr1.reduce((a, b) => ({ ...a, [b]: true }), {});

  // return arr2.reduce((acc, val) => {
  //   if (val in map) acc.push(val);
  //   return acc;
  // }, []);

  let a = 0;
  let b = 0;
  const out = [];

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] === arr2[b]) {
      out.push(arr1[a]);
      a++;
      b++;
    } else if (arr1[a] > arr2[b]) {
      b++;
    } else {
      a++;
    }
  }

  return out;
}

console.log(solve([1, 3, 4, 6, 7, 9], [1, 2, 4, 5, 9, 10]));
