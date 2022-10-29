/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let words = s.split(" ")
    let kWords = words.slice(0, k)
    return kWords.join(" ")
};
