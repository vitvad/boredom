/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxP = '';
    for (let i = 0, len = s.length; i<len; i++) {
      for(let offset of [0,1]) {
        let l = i;
        let r = i + offset;
        while (l >= 0 && s[l] === s[r]) {
          l--;
          r++;
        }
        if (r - l - 1> maxP.length) {
          maxP = s.substring(l + 1, r);
        }
      }
    }

    if(maxP.length === 0 && s.length) {
      maxP = s[0];
    }

    return maxP;
};
// @lc code=end

