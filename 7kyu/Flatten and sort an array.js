function flattenAndSort(array) {
  let combinedArray = []
  for(let element of array) {
    for(let number of element) {
      combinedArray.push(number)
    }
  }
  combinedArray = combinedArray.sort((a, b) => a - b)
  return combinedArray
}