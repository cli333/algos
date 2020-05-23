// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example

// For

// picture = ["abc",
//   "ded"]

// the output should be

// addBorder(picture) = ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]

// Hints

// concat()
// unshift()
// push()

// Input / Output

// [time limit]4000ms(js)
// [input] array.string picture

// A non - empty array of non - empty equal - length strings.

// Guaranteed constraints:

// 1 ≤ picture.length ≤ 5,

//   1 ≤ picture[i].length ≤ 5.

//   [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.

function solve(picture) {
  const longest = Math.max(...picture.map((p) => p.length));

  for (let i = 0; i < picture.length; i++) {
    while (picture[i].length < longest + 2) {
      picture[i] = "*" + picture[i];
      if (picture[i].length === longest + 2) {
        break;
      } else {
        picture[i] = picture[i] + "*";
      }
    }
  }

  picture.unshift("*".repeat(longest + 2));
  picture.push("*".repeat(longest + 2));

  return picture;
}

console.log(solve(["abc", "ded"]));
console.log(solve(["a", "deed"]));
