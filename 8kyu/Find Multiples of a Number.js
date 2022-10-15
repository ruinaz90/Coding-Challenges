function findMultiples(integer, limit) {
  //your code here
  let arr = []
  for(let i = 1; i <= limit / integer; i++) {
    arr.push(integer * i)
  }
  return arr
}
