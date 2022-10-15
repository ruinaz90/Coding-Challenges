function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0
  for(let points of classPoints) {
    sum += points
  }
  let avgScore = (sum + yourPoints) / (classPoints.length + 1)
  return yourPoints > avgScore
}
