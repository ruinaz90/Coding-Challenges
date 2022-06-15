var findAverage = function (nums) {
  // Code here
  const sum = nums.reduce((acc, val) => acc + val, 0)
  return sum / nums.length
}
