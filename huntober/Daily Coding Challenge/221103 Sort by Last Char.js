function last(x) {
    let words = x.split(" ")
    let sortedWords = words.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
    return sortedWords
}
