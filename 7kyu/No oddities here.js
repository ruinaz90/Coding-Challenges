function noOdds( values ){
  // Return all non-odd values
  let even = []
  for(let number of values) {
    if(number % 2 === 0)
      even.push(number)
  }
  return even
}
