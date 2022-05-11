function oddOrEven(array) {
   //enter code here
  let sum = array.reduce((acc, val) => acc + val, 0)
  return sum % 2 === 0 ? "even" : "odd"
}
