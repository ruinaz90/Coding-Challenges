/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = Array.from(String(n), Number)
    const sum = digits.reduce((acc, val) => acc + val, 0)
    const product = digits.reduce((acc, val) => acc * val, 1)
    return product - sum
};
