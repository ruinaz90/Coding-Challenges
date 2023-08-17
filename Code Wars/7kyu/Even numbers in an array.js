function evenNumbers(array, number) {
  // good luck
  let evens = [], result = []
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] % 2 === 0)
      evens.push(array[i])
  }
  for(let i = 0; i < number; i++) {
    result[i] = evens[i]
  }
  return result.reverse()
}
