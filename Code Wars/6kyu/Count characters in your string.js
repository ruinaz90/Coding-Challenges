function count (string) {
    if(string.length == 0 || string == null)
        return {}

    const charCount = {}
    for(letter of string) {
        charCount[letter] = (charCount[letter] || 0) + 1
    }

    return charCount
}
