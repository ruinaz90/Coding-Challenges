/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}, count = 0, majority = nums[0]

    for(let number of nums) {
        map[number] = (map[number] || 0) + 1
    }

    for(let element in map) {
        if(map[element] > count) {
            count = map[element]
            majority = element
        }
    }

    return majority
};

//https://leetcode.com/problems/majority-element/submissions/
