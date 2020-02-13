// find max profit, cannot be adjacent

const prices = [9, 5, 6, 4, 6, 12];

const rob = prices => {
  const res = [prices[0], Math.max(prices[0], prices[1])];

  for (let i = 2; i < prices.length; i++) {
    res.push(Math.max(res[i - 1], res[i - 2] + prices[i]));
  }

  return res[res.length - 1];
};

console.log(rob(prices));
