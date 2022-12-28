function persistence(num) {
   //code me
  let count = 0
  if(num < 10) return 0
  let digits = Array.from(String(num), Number)
  while(digits.length > 1) {
    count++
    digits = Array.from(String(digits.reduce((acc, val) => acc * val, 1)), Number)
  }
  return count
}
