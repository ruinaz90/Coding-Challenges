function stringTransformer(str) {
    let words = str.split(" ").reverse().join(" ")
    let letters = words.split("")
    let transformed = letters.map((letter) => letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase())
    return transformed.join("")
}
