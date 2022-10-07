function accum(s) {
    let letters = s.split("")
    let newLetters = []
    for(let i = 0; i < letters.length; i++) {
        newLetters[i] = letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i)
    }
    return newLetters.join("-")
}
