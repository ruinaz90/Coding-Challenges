function solve(s){
    let upper = 0, lower = 0
    for(let letter of s) {
      if(letter === letter.toUpperCase()) upper++
      else lower++
    }
    return lower > upper || lower === upper ? s.toLowerCase() : s.toUpperCase()
  }
  //https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript