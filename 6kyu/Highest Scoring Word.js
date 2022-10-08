function high(x){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphaNumbers = {}
    for(let i = 0; i < alphabet.length; i++) {
        alphaNumbers[alphabet[i]] = i + 1
    }
    
    const words = x.split(" ")
    let numbers = words.map(element => element.split("").map(letter => alphaNumbers[letter]))
    let points = []

    for(let number of numbers) {
        points.push(number.reduce((acc, val) => acc + val, 0))
    }

    const index = points.indexOf(Math.max(...points))
    return words[index]
}
