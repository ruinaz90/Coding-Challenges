function count (string) {  
  // The function code should be here
  const count = {}
  for(let letter of string) {
    count[letter] = (count[letter] || 0) + 1
  }
  return count
}

//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
