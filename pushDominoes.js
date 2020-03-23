// there are n dominoes in a line
// in the beginning we push some dominoes either to the left or right
// when a dominoes is pushed from the left and right it stays upright
// given a string 'S', if dominoes has been pushed to the right S[i] = R, if to the left S[i] = L, s[i] = '.' if has not been pushed
// return a string representing the final state

// .L.R...LR..L..
// output => LL.RR.LLRRLL..

// RR.L
// RR.L

const pushDom = s => {
  // loop through from left, calculate all forces from the left
  // loop from right, all forces from the right
  // loop thorugh forces and append to result

  const dominoes = s.split("");
  const n = dominoes.length;
  const forces = [...Array(n)].fill(0);
  let result = "";

  let force = 0;
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R") {
      // if no opposing left force
      // can push all dominoes to the right
      // force will be of 'n' strength
      force = n;
    } else if (dominoes[i] === "L") {
      // if reach a L, reset the force
      force = 0;
    } else {
      // decrease the force by 1 for each dominoe
      // gone through
      force = Math.max(force - 1, 0);
    }
    forces[i] += force;
  }

  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === "L") {
      force = n;
    } else if (dominoes[i] === "R") {
      force = 0;
    } else {
      force = Math.max(force - 1, 0);
    }
    forces[i] -= force;
  }

  for (let f of forces) {
    if (f > 0) {
      result += "R";
    } else if (f < 0) {
      result += "L";
    } else {
      result += ".";
    }
  }

  return result;
};

console.log(pushDom(".L.R...LR..L..")); //LL.RR.LLRRLL..
console.log(pushDom("RR.L")); // RR.L
