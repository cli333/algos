// given two strings p and t, find whether any anagram of string p is a substirng of t

function sol(p, t) {
  const pmap = mapper(p);
  const len = p.length;

  for (let i = 0; i < t.length - len + 1; i++) {
    const sub = t.substring(i, i + len);
    const smap = mapper(sub);
    if (areSame(pmap, smap)) return sub;
  }

  return null;

  function mapper(s) {
    return s.split("").reduce((a, b) => ({ ...a, [b]: a[b] + 1 || 1 }), {});
  }

  function areSame(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) {
      return false;
    }

    for (let key of Object.keys(map1)) {
      if (!map2[key] || map1[key] !== map2[key]) {
        return false;
      }
    }

    return true;
  }
}

console.log(sol("json", "jjnsjnocat"));
console.log(sol("god", "iamdog"));
