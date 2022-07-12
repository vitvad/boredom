/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);

    nums.reduce((left, v, i) => {
      res[i] *= left;
      return left *= v;
    }, 1);

    nums.reduceRight((right, v , i) => {
      res[i] *= right;
      return right *= v;
    },1);

    return res;
    // let product = nums.reduce((m, v) => m*v);
    // return nums.map(v => product / v);
};
// @lc code=end