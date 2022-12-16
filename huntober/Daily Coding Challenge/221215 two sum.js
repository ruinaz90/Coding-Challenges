// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSum(array, sum) {
    const map = {}
    const pairs = []
    for(let number of array) {
        let complement = sum - number
        if(map[complement])
            pairs.push([number, complement])
        else
            map[number] = 1
    }
    return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4), '\nANSWER: [[2, 2], [3, 1]]')
