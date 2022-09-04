function twoSort(s) {
    let newArr = s.sort()[0].split('')
    return newArr.map(element => element + "***").join('').slice(0, -3)
  }
  //https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript