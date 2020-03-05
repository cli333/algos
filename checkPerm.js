// check if a string is a perm of another

const perm = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  let map1 = [...s1].reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, []);

  let map2 = [...s2].reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, []);

  for (let char in map1) {
    if (!map2[char] || map2[char] !== map1[char]) {
      return false;
    }
  }

  return true;
};

console.log(perm("abca", "acb"));
