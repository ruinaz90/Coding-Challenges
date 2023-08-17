function comp(array1, array2){
    //your code here
    if(array1 == null || array2 == null) return false
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    return array1.every((element, index) => element ** 2 == array2[index])
  }
  //https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript