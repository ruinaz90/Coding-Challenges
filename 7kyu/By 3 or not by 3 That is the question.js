function divisibleByThree(str){
    const sumDigits = str.split('').map(digit => Number(digit)).reduce((acc, val) => acc + val, 0)
    return Number.isInteger(sumDigits / 3)
  }
  //https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript