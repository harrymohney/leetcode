/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);
    let left = 0;

    
    for (let i = 0; i < nums.length; i++) {
        let result = i
        sum -= nums[i]
        if(left == sum) {
            return result;
        }
        left += nums[i]
    }
    return -1
};