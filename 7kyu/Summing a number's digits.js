function sumDigits(number) {
  let digits = Array.from(String(Math.abs(number)), Number)
  let sum = digits.reduce((acc, val) => acc + val, 0)
  return sum
}
