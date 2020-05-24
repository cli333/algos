// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.If not possible, return the empty string.

//   Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""
// Note:

// S will consist of lowercase letters and have length in range[1, 500].

function solve(S) {
  // find most common char
  // create queue sorted by char counts
  // while the queue length > 1
  // keep adding the most frequent and second most frequent onto the result string

  const map = S.split("").reduce(
    (acc, val) => ({ ...acc, [val]: acc[val] + 1 || 1 }),
    {}
  );
  const q = Object.entries(map).sort((a, b) => (a[1] > b[1] ? -1 : 1));
  let res = "";

  while (q.length > 1) {
    const most = q.shift();
    const secondMost = q.shift();
    res += most[0];
    res += secondMost[0];
    most[1]--;
    secondMost[1]--;
    if (most[1] > 0) q.push(most);
    if (secondMost[1] > 0) q.push(secondMost);
    // sort the q, like max heap
    q.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  }

  // if the last item on q has count > 1, return "", else return res + char
  if (q.length) {
    const [char, count] = q.shift();
    if (count > 1) {
      return "";
    } else {
      return res + char;
    }
  } else {
    return res;
  }
}

console.log(solve("aab"));
console.log(solve("aaab"));
