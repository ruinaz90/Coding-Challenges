/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    const words = sentences.map(element => element.split(" "))
    words.sort((a, b) => b.length - a.length)
    return words[0].length
};