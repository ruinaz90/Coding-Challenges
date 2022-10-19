/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let stringArray = []
    for(let i = 0; i < s.length; i++) {
        stringArray[indices[i]] = s[i]
    }
    return stringArray.join("")
};
