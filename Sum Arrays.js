function sum (numbers) {
    "use strict";
  let sum = 0
    if (numbers.length == 0 || numbers == [])
      return 0
    for(let number of numbers) {
      sum += number
    }
  return sum
};
