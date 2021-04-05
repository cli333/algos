// valid brackets

function s(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const top = stack[stack.length - 1];
    const cur = str[i];

    if (
      (top === "[" && cur === "]") ||
      (top === "{" && cur === "}") ||
      (top === "(" && cur === ")")
    ) {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }

  return stack.length ? false : true;
}

console.log(s("[]"));
console.log(s("{[]}()"));
console.log(s("{[}]()"));
console.log(s("{[]}]()"));
console.log(s("{(})"));
