function evenLast(numbers) {
  if(numbers.length < 1)
    return 0
  
  let sum = 0
  for(let i = 0; i < numbers.length; i++) {
    if(i % 2 == 0) {
      sum += numbers[i]
    }
  }
  return sum * numbers[numbers.length - 1]
}
