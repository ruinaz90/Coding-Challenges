function sumOfMinimums(arr) {
  return arr.reduce((acc, val) => acc + Math.min(...val), 0)
}