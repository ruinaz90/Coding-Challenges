function isIsogram(str){
    let letters = {}
    
    for(let i = 0; i < str.length; i++)
        letters[str[i].toLowerCase()] = (letters[str[i].toLowerCase()] || 0) + 1
    
    const letter = Object.values(letters)

    return letter.every(element => element == 1)
}
