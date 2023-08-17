function findOdd(A) {
  const count = {}
  
  for(let num of A) {
    count[num] = count[num] + 1 || 1
  }
  
  for(let value in count) {
    if(count[value] % 2 !== 0)
      return Number(value)
  }
}
