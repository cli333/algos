// given two strings a and b of lowercase,
// return true if and only if we can swap TWO letters in a so that the result equals b

// a = 'ab', b = 'ba'
// true

// a = 'ab', b = 'ab'
// false

// a = 'aa', b = 'aa'
// true

// 'aaabc', 'aaacb'
// true

const buddy = (a, b) => {
  if (a.length !== b.length) return false;
  if (a === b) {
    const hash = {};
    for (let char of a.split("")) {
      hash[char] = true;
    }
    if (Object.keys(hash).length < a.length) {
      return true;
    } else {
      return false;
    }
  }
  // create arr of the indices that they are different at
  const indices = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      indices.push(i);
    }
  }

  if (
    indices.length === 2 &&
    a[indices[0]] === b[indices[1]] &&
    a[indices[1]] === b[indices[0]]
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(buddy("a", "a")); // false
console.log(buddy("aa", "aa")); // true
console.log(buddy("ab", "ba")); // true
console.log(buddy("ab", "ab")); // false
console.log(buddy("aaabc", "aaacb")); // true
