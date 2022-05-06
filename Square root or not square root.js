function squareOrSquareRoot(array) {
  for(let i = 0; i < array.length; i++) {
    if(Number.isInteger(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i])
    }
    else {array[i] = array[i] ** 2}
  }
  return array
}
