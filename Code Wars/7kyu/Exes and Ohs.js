function XO(str) {
    //code here
  let x = 0, o = 0
  for(let letter of str) {
    if(letter.toLowerCase() === "x") x++
    else if(letter.toLowerCase() === "o") o++
  }
  return x === o
}
