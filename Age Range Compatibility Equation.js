function datingRange(age){
    //return min-max
    let min, max
    if(age > 14) {
      min = Math.floor(age / 2 + 7)
      max = Math.floor((age - 7) * 2)
    }
    else {
      min = Math.floor(age - 0.10 * age)
      max = Math.floor(age + 0.10 * age)
    }
    return `${min}-${max}`
  }
  //https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript