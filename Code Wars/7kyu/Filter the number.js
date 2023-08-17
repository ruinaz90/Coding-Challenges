var FilterString = function(value) {
    //Complete this function :)
    const digits = /\d/g
    let number = value.match(digits)
    return Number(number.join(''))
  }
  //https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript