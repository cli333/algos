// a sentence s is composed of words separated by spaces
// convert the setence to goat latin

// if a word begins with a vowel, append 'ma' to the end of the word
// if a word begins with a consonant, remove the first letter and append to the end and 'ma'
// add one letter 'a' to the end of each word per its word index in the sentence staring with 1
// first word gets 'a' appended, second word gets 'aa' appended

const goat = s => {
  const vowels = /[aeiou]/i;
  let words = s.split(" ");
  let result = [];
  let index = 1;

  for (word of words) {
    let firstLetter = word[0];
    if (vowels.test(firstLetter)) {
      result.push(`${word}ma${"a".repeat(index)}`);
    } else {
      result.push(`${word.slice(1)}${firstLetter}ma${"a".repeat(index)}`);
    }
    index++;
  }
  return result.join(" ");
};

console.log(goat("I speak Goat Latin"));
