// find the max profit

const prices = [9, 5, 6, 4, 6, 12];

// one buy/sell

const buy = prices => {
  let min = prices[0];
  let profit = 0;

  for (let price of prices) {
    if (price < min) min = price;
    if (price - min > profit) profit = price - min;
  }

  return profit;
};

console.log(buy(prices));

// many buy/sells

const buy2 = prices => {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i];
    }
  }

  return profit;
};

console.log(buy2(prices));
