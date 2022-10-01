/*function duplicateEncode(word){
    let newWord = ''
    let letters = word.toLowerCase().split("")

    for(let i = 0; i < letters.length; i++) {
        if(letters.indexOf(letters[i]) == letters.lastIndexOf(letters[i]))
            newWord += "("
        else
            newWord += ")"
    }
    return newWord
}*/

function duplicateEncode(word){
    let letters = word.toLowerCase().split("")
    const newLetters = letters.map(element => letters.indexOf(element) == letters.lastIndexOf(element) ? "(" : ")")

    return newLetters.join("")
}
