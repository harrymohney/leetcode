/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    let result = [];

    for (let i = 0; i < nums.length / 2; i++) {
        let cx = x[i];
        let cy = y[i];

        result.push(cx);
        result.push(cy);
    }

    return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
console.log(shuffle([1, 1, 2, 2], 2))