/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let array = [0, 1]
    for(let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2])
    }
    console.log(array)
    return array[array.length - 1]
};
