function averageLength(array) { 
  // good luck
  const average = Math.round(array.join("").length / array.length)
  return array.map(element => element[0].repeat(average))
}

//https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript
