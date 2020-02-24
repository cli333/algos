// given string j representing types of jewels
// string s representing types of stones

// find how many stones are jewels

const J = "aA";
const S = "aAAbbbb"; // output = 3

const jewels = (jewels, stones) => {
  let numJewels = 0;

  for (let stone of [...stones]) {
    if (jewels.includes(stone)) numJewels++;
  }

  return numJewels;
};

console.log(jewels(J, S));
