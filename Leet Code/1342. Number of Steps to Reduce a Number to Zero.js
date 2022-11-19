/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0
    while(num !== 0) {
        num % 2 === 0 ? num /= 2 : num--
        steps++
    }
    return steps
};
