function sumOfDifferences(arr) {
    if(arr.length == 0 || arr.length == 1)
      return 0
    let sum = 0, array = arr.sort((a, b) => b - a)
    for(let i = 0; i < arr.length - 1; i++) {
      sum += array[i] - array[i + 1]
    }
    return sum
  }