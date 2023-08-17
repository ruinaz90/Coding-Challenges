function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const lowerCaseString = string.toLowerCase()
    const uniqueString = [...new Set(lowerCaseString)].sort()
    const aIndex = uniqueString.indexOf("a")
    const newString = uniqueString.join("").slice(aIndex)
    return newString == alphabet
}
