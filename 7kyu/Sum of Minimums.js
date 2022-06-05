function sumOfMinimums(arr) {
    // your code here
    let sum = 0
    for(let innerArr of arr) {
      sum += Math.min(...innerArr)
    }
    return sum
  }