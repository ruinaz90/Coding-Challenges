function comp(array1, array2){
    //your code here
    if(array1 == null || array2 == null) return false
    const sorted1 = array1.sort((a, b) => a - b), sorted2 = array2.sort((a, b) => a - b)
    let conditions = []
    for(let i = 0; i < array1.length; i++) {
      if(sorted1[i] ** 2 == sorted2[i]) {
        conditions.push(true)
      }
      else conditions.push(false)
    }
    if(conditions.includes(false))
      return false
    else return true
  }
  //https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript