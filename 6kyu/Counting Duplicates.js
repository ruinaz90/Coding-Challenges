function duplicateCount(text){
    let count = {}

    for(let letter of text) {
        count[letter.toLowerCase()] = (count[letter.toLowerCase()] || 0) + 1
    }

    const letters = Object.values(count)
    
    const countedLetters = letters.reduce((acc, val) => {
        if(val > 1) acc++
        return acc
    }, 0)

    return countedLetters
}
