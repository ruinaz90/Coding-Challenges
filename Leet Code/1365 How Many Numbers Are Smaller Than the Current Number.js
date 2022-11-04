/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let smallerNums = []
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j != i && nums[j] < nums[i])
                count++
        }
        smallerNums.push(count)
        count = 0
    }
    return smallerNums
};
