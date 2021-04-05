// 187. Repeated DNA Sequences
// Medium

// 1166

// 333

// Add to List

// Share
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

function s(str) {
  if (str.length < 10) return [];
  const repeatedDNA = new Set();
  const allSubs = new Set();
  for (let i = 0; i < str.length && i + 10 < str.length; i++) {
    let substring = s.slice(i, i + 10);
    if (allSubs.has(substring)) {
      repeatedDNA.add(substring);
    } else {
      allSubs.add(substring);
    }
  }
  return [...repeatedDNA];
}
