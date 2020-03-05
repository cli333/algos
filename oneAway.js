// three types of edits on a string => remove, delete, insert
// check if string is one edit away from being same as another string

// cat , caet === true
// caat, ca === false

function checkReplace(m, n) {
  console.log("replace");
  for (let i = 0; i < m.length; i++) {
    if (m[i] !== n[i]) {
      if (m[i + 1] !== n[i + 1]) return false;
    }
  }
  return true;
}
function checkDelete(m, n) {
  console.log("delete");
  for (let i = 0; i < m.length; i++) {
    if (m[i] !== n[i]) {
      if (m[i + 1] !== n[i]) {
        return false;
      }
    }
  }
  return true;
}
function checkInsert(m, n) {
  console.log("insert");
  for (let i = 0; i < n.length; i++) {
    if (n[i] !== m[i]) {
      if (n[i + 1] !== m[i]) return false;
    }
  }
  return true;
}

const oneAway = (m, n) => {
  if (m.length === n.length) {
    // same length, so check if one replace away
    return checkReplace(m, n);
  } else if (m.length > n.length) {
    // check if one delete
    return checkDelete(m, n);
  } else if (m.length < n.length) {
    // cehck if one insert
    return checkInsert(m, n);
  }
};

console.log(oneAway("cat", "caet")); // true
console.log(oneAway("aet", "caet")); // true
console.log(oneAway("cats", "caet")); // false
console.log(oneAway("pale", "bale")); // true
