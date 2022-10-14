/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0
    operations.forEach(operation => (operation == "X++" || operation == "++X") ? x++ : x--)
    return x
};
