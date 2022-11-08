/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const output = []
    for (let i = 0; i < n; i++) {
        output[2*i] = nums[i]
        output[2*i+1] = nums[n+i]
    }
    return output
}
