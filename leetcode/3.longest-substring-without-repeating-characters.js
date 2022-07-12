/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let d = {};
    let left = 0;
    return s.split("").reduce((max, symb, right) => {
      if (d[symb] !== undefined && d[symb] >= left) {
        left = d[symb] + 1;
      }

      max = Math.max(max, right + 1 - left);

      d[symb] = right;
      return max;
    }, 0);
};
// @lc code=end

