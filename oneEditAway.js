function solve(s1, s2, edits = 1) {
  // check if strings can be edited to the other
  // edits is the max allowed edits => delete/replace

  if (Math.abs(s1.length - s2.length) > edits) return false;

  let a = 0;
  let b = 0;

  if (s1.length === s2.length) {
    sameLength(s1, s2);
  } else {
    notSameLength(s1, s2);
  }

  console.log({ edits });
  return edits >= 0;

  //

  function sameLength(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) edits--;
    }
  }

  function notSameLength(s1, s2) {
    let longer = s1.length > s2.length ? s1 : s2;
    let shorter = s1.length > s2.length ? s2 : s1;
    let l = 0;
    let s = 0;
    // start with longer
    // while l !== s, l++, edits--
    while (l < longer.length && s < shorter.length) {
      if (longer[l] === shorter[s]) {
        l++;
        s++;
      } else {
        l++;
        edits--;
      }
    }
  }
}

console.log(solve("abcde", "abfde"));
console.log(solve("xyz", "daz", 2));
