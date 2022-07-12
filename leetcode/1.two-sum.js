/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i < nums.length - 1; i++) {
        let second = target - nums[i];
        if(nums.indexOf(second, i+1) > i) {
            return [i, nums.indexOf(second, i+1)];
        }
    }
};
// @lc code=end