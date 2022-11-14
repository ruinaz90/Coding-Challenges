function cubeOdd(arr) {
  const cubed = arr.map(number => typeof number === "string" ? undefined : number ** 3)
  let sum = 0
  for(let number of cubed) {
    if(number === undefined) return undefined
    if(number % 2 !== 0) {
      sum += number
    }
  }
  return sum
}
