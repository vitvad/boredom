/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // memo[0] - before the last
  // memo[1] - last
    return nums.reduce(function (memo, value) {
      return [memo[1], Math.max(memo[0] + value, memo[1])];
    }, [0, 0])[1];
};
// @lc code=end

console.log.call(null, rob([2,1,1,2]))              // 4
console.log.call(null, rob([1,2,3,1]))              // 4
console.log.call(null, rob([2, 7, 9, 3, 1]))        // 12
console.log.call(null, rob([4, 1, 2, 7, 5, 3, 1]))  // 14
console.log.call(null, rob([2, 7, 9, 3, 1, 5]))     // 16
console.log.call(null, rob([2, 4, 8, 9, 9, 3]))     // 19
console.log.call(null, rob([2, 17, 9, 3, 1]))       // 20