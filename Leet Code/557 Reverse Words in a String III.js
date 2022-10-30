/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(" ")
    const reversedLetters = words.map((word) => word.split("").reverse().join(""))
    return reversedLetters.join(" ")
};
