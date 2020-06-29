function sol(products, searchWord) {
  const res = [];
  products.sort();
  let a = 0;
  let b = products.length - 1;
  for (let i = 0; i < searchWord.length; i++) {
    while (
      (a < b && products[a].length <= i) ||
      products[a][i] !== searchWord[i]
    )
      a++;
    while (
      (a < b && products[b].length <= i) ||
      products[b][i] !== searchWord[i]
    )
      b--;
    let min = Math.min(a + 3, b + 1);
    let list = [];
    for (let i = a; i < min; i++) {
      list.push(products[i]);
    }
    res.push(list);
  }
  return res;
}

console.log(sol(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mou"));
