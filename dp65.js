// There are n cities connected by m flights.Each flight starts from city u and arrives at v with a price w.

// Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops.If there is no such route, output - 1.

// Example 1:
// Input:
// n = 3, edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
// src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph looks like this:

// The cheapest price from city 0 to city 2 with at most 1 stop costs 200, as marked red in the picture.
//   Example 2:
// Input:
// n = 3, edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]]
// src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph looks like this:

// The cheapest price from city 0 to city 2 with at most 0 stop costs 500, as marked blue in the picture.

function sol(n, flights, src, dst, K) {
  // flights = [][city1, city2, cost]
  // n = cities
  // src = starting point
  // dst = destination
  // K = max number of stops

  const g = []; // the graph
  // make adjacenty matrix
  // g[source][destination] = cost
  for (let i = 0; i < n; i++) {
    g.push([]);
  }
  for (let f of flights) {
    g[f[0]][f[1]] = f[2];
  }

  // priority queue / heap
  const q = [];
  // starting point
  // [price = 0, place = src, remainStops = K + 1]
  q.push([0, src, K + 1]);

  while (q.length) {
    const [price, place, remainStops] = q.shift();

    if (place === dst) return price;
    if (remainStops > 0) {
      for (let i = 0; i < n; i++) {
        // check the graph
        // n = destination, if g[src][dst] > 0
        if (g[place][i] > 0) {
          q.push([price + g[place][i], i, remainStops - 1]);
        }
        console.log({ q });
      }
    }

    // sort the q
    // lower priced flights are prioritized
    q.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  }

  return -1;
}

console.log(
  sol(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  )
); // 200
console.log(
  sol(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  )
); // 500
