function mergeArrays(arr1, arr2) {
    let arr = [...new Set(arr1.concat(arr2))]
    return arr.sort((a, b) => a - b)
  }