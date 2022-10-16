/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let stone = stones.split("")
    let jewel = jewels.split("")
    return stone.filter(element => jewel.includes(element)).length
};
