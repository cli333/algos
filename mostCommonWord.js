// given a list of banned words
// return the most frequent word that is not
// in the banned list

const paragraph = "bob hit a ball, the hit ball flew after it was hit";
const banned = ["hit"];
// output = 'ball'

// ball is the most common word after hit

const most = (paragraph, banned) => {
  // split on non words
  let lower = paragraph.toLowerCase().split(/\W+/);
  const bannedMap = banned.reduce((a, b) => {
    a[b] = true;
    return a;
  }, {});
  const notBannedMap = {};

  // loop through paragraph
  // if word isn't in bannedMap
  // put into notBanned
  // return the largest count in notBanned

  for (let word of lower) {
    if (!bannedMap[word]) {
      notBannedMap[word] = notBannedMap[word] + 1 || 1;
    }
  }

  let max = 0;
  let maxWord = null;

  for (let word in notBannedMap) {
    if (notBannedMap[word] > max) {
      max = notBannedMap[word];
      maxWord = word;
    }
  }

  return maxWord;
};

console.log(most(paragraph, banned));
