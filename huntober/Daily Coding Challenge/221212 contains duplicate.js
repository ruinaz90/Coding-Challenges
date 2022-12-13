/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}
    let duplicate = false
    for(let number of nums) {
        map[number] ? duplicate = true : map[number] = true
    }
    return duplicate
};

//https://leetcode.com/problems/contains-duplicate/description/
