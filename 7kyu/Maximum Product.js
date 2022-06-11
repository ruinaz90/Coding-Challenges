function adjacentElementsProduct(array) {
  // max product
  let max = array[0] * array[1], prod
  for(let i = 0; i < array.length; i++) {
    prod = array[i] * array[i + 1]
    if(prod > max)
      max = prod
  }
  return max
}
