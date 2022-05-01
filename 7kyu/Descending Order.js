function descendingOrder(n){
  //...
  let numbers = String(n)
  let newNum = numbers.split('').sort().reverse().join('')
  return Number(newNum)
}
