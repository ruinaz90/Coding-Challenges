/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

from https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

===
function takes in a string
    -capitalization doesn't matter
function returns a string
    -if a letter in the original string appears once, replace it with "("
    -if a letter in the original string appears more than once, replace it with ")"
*/

function duplicateEncoder(word) {
    // convert word to all lowercase
    const letters = word.toLowerCase().split("")
    // map through the word, check if index of element is the same as last index of element
    // if it is, replace the element with "("
    // if not, replace the element with ")"
    const encoded = letters.map(letter => letters.indexOf(letter) === letters.lastIndexOf(letter) ? "(" : ")")
    return encoded.join("")
}

console.log(duplicateEncoder("din"))        // (((
console.log(duplicateEncoder("recede"))     // ()()()
console.log(duplicateEncoder("Success"))    // )())())
console.log(duplicateEncoder("(( @"))       // ))((
