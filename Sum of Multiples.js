function sumMul(n,m){
//your idea here
  if(m <= 0) return "INVALID"
  let sum = 0
  for(let i = 1; i < m; i++) {
    if(i % n === 0)
      sum += i
  }
  return sum
}
