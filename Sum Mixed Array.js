function sumMix(x){
  let numArr = x.map(element => Number(element))
  return numArr.reduce((acc, val) => acc + val, 0)
}
