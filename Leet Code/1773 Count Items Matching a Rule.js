/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0, ruleIndex

    // determine which index ruleKey is
    if(ruleKey === "type") ruleIndex = 0
    else if(ruleKey === "color") ruleIndex = 1
    else if(ruleKey === "name") ruleIndex = 2

    // loop through items array
    for(let i = 0; i < items.length; i++) {
        // check [i][key] is the same as ruleValue, count +1
        if(items[i][ruleIndex] == ruleValue)
            count++
    }

    // return the final count
    return count
};
