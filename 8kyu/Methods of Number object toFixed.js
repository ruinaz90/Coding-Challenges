
function howManySmaller(arr,n){
    arr.forEach((element, index) => arr[index] = Number(element.toFixed(2)))
    let count = 0
    for(let number of arr) {
      if(number < n)
        count++
    }
    return count
  }

  //https://www.codewars.com/kata/57256064856584bc47000611/train/javascript