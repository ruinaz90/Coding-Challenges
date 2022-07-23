function findUniq(arr) {
    // do magic
    //PREP
    //P: array
    //R: number
    //E: 
    //P
    //sort array
    let sorted = arr.sort()
    //if first index != second index, return first index
    if(sorted[0] != sorted[1]) return sorted[0]
    //else return last index
    else return sorted[sorted.length - 1]
  }

  //https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript