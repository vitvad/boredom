/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    let binary = (num >>> 0).toString(2);
    return (binary.substr(0,1) === '1' && !binary.substr(1).includes('1') && binary.substr(1).length % 2 === 0 )
};
// @lc code=end

