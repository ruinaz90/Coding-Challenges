/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lCount = 0, rCount = 0, balancedStrings = 0
    for(let letter of s) {
        if(letter === 'R') rCount++
        else lCount++
        
        if(lCount === rCount) balancedStrings++
    }
    return balancedStrings
};
