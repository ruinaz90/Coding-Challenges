function highAndLow(numbers){
  // ...
  let nums = numbers.split(' ')
  let min = Math.min(...nums), max = Math.max(...nums)
  return `${max} ${min}`
}
