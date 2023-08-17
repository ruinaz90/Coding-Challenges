function stairsIn20(s){
  //your code here
  const totalS = [].concat(...s)
  const sum = totalS.reduce((acc, val) => acc + val, 0)
  return sum * 20
}
