function sumArray(array) {
    if(array == null || array.length < 2) {
      return 0
    }
    else {
      let sortedArr = array.sort((a, b) => a - b)
      let sum = 0
      for(let i = 1; i < sortedArr.length - 1; i++) {
          sum += sortedArr[i]
      }
      return sum
    }
  }
