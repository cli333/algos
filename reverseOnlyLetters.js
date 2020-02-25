// give a string reverse only the characters that are letters
// everything else stays in place

let string = "ab/cd!ef)-geh~zI";

const rev = s => {
  let string = [...s];
  let stack = [];
  let regex = /[a-zA-Z]/;
  // push all chars to stack
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      stack.push(string[i]);
    }
  }
  // change all chars on string array
  // using popped chars from stack
  for (let i = 0; i < string.length; i++) {
    if (regex.test(string[i])) {
      string[i] = stack.pop();
    }
  }

  return string.join("");
};

console.log(rev(string));

const rev2 = s => {
  let end = s.length - 1;
  let regex = /[a-zA-Z]/;
  let out = "";

  for (let start = 0; start < s.length; start++) {
    if (regex.test(s[start])) {
      while (!regex.test(s[end])) {
        end--;
      }
      out += s[end];
      end--;
    } else {
      out += s[start];
    }
  }

  return out;
};

console.log(rev2(string));
