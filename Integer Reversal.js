function reverseInt(number) {
    let reversed = parseInt(String(number).split("").reverse().join(""))
    return reversed * Math.sign(string)
}

console.log(reverseInt(1234), "4321")
console.log(reverseInt(-1200), "-21")