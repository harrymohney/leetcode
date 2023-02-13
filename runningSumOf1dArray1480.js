/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
    let result = []
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let cv = nums[i]

        currentSum += cv;
        result.push(currentSum)
    }

    return result;
};

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))