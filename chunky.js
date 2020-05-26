// Write a function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two - dimensional array.

//   Example

// chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//   chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

//     Hints

// slice()

function solve(arr, length) {
  const out = [[]];

  for (let el of arr) {
    if (out[out.length - 1].length < length) {
      out[out.length - 1].push(el);
    } else {
      out.push([el]);
    }
  }

  return out;
}

console.log(solve(["a", "b", "c", "d"], 2));
console.log(solve([0, 1, 2, 3, 4, 5], 4));
