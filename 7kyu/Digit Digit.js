function squareDigits(num) {
    let digits = Array.from(String(num), Number)
    return +digits.map(digit => digit * digit).join("")
}

console.log(squareDigits(9119))