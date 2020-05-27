// Check if a string(first argument, str) ends with the given target string(second argument, target).

// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

//   Example

// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;
// Hints

// substr()

function solve(str, target) {
  let a = str.length - 1;
  let b = target.length - 1;

  while (a >= 0 && b >= 0) {
    if (str[a] !== target[b]) return false;
    a--;
    b--;
  }

  return true;
}

console.log(solve("Abstraction", "action"));
console.log(solve("Abstraction", "pen"));
