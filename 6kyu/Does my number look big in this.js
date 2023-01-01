function narcissistic(value) {
  // Code me to return true or false
  const digits = Array.from(String(value), Number)
  return digits.map(element => element ** digits.length).reduce((acc, val) => acc + val, 0) === value
}
