// rearrange an array of nums
// rearrange into groups so that each group is size W, and consists of
// W consecutive nums
// return true if can be done

// [1, 2, 3, 6, 2, 3, 4, 7, 8] => [[1,2,3],[2,3,4],[6,7,8]]

const hand = (array, w) => {
  // sort the array
  // loop
  // if last item length = w || includes num PUSH [num]
  // if last.length

  array.sort((a, b) => a - b);
  const out = [[]];
  let last = 0;

  for (let n of array) {
    if (out[last].length === w) {
      if (out[last + 1]) {
        out[last + 1] = [];
      }
      out[last + 1].push(n);
      last++;
    } else if (out[last].includes(n)) {
    } else {
      out[last].push(n);
    }
  }

  console.log(out);
  return out.every(group => group.length === w);
};

console.log(hand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
