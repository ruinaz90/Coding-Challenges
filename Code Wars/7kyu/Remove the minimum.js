function removeSmallest(numbers) {
  if(numbers.length < 2) return []
  
  let copyOfNumbers = [...numbers]
  const indexOfMin = numbers.indexOf(Math.min(...numbers))
  copyOfNumbers.splice(indexOfMin, 1)
  return copyOfNumbers
}
