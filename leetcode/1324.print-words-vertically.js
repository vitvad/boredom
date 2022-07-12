/*
 * @lc app=leetcode id=1324 lang=javascript
 *
 * [1324] Print Words Vertically
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */

// brute O(WORDS * LENGTH) > O(N)
const variant1 = (s) => {
    const words = s.split(' ');
    const max = words.reduce((max, word) => Math.max(max, word.length), 0);
    const res = new Array(max).fill('');
    for (let i=0; i< max;i++) {
      words.forEach((w) => {
        res[i] += (w[i] ?? ' ');
      })
      res[i] = res[i].trimEnd();
    }

    return res;
};

// variation O(N)
const variant2 = (s) => {
  const res = [];
  for (let i = 0, word = 0, idx=0; i<s.length; i++, idx++) {
    const char = s[i];

    if(char === ' ') {
      word++;
      idx = -1; // next iteration gonna be 0
      continue;
    }

    if (res[idx] === undefined) {
      res[idx] = " ".repeat(word) + char;
      continue;
    }

    if(res[idx].length !== word) {
      res[idx] += " ";
    }
    res[idx] += char;
  }
  return res;
}


const printVertically = variant2;
// @lc code=end

console.log(printVertically("HOW ARE YOU"));
console.log(printVertically("TO BE OR NOT TO BE"));
console.log(printVertically("CONTEST IS COMING"));
console.log(printVertically("A LONGESTWORD IN S PRINTED"));
console.log(printVertically("A B C D E F G LONGESTWORD H I J K L M N O P"));