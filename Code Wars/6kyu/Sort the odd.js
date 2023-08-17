function sortArray(array) {
  // Return a sorted array.
  const odd = array.filter(number => number % 2 !== 0).sort((a, b) => a - b)
  return array.map(number => number % 2 == 0 ? number : odd.shift())
}
