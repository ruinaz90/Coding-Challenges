function caffeineBuzz(n){
  if(n % 12 === 0) {
    if(n % 2 === 0)
      return "CoffeeScript"
    return "Coffee"
  }
  
  else if(n % 3 === 0) {
    if(n % 2 === 0)
      return "JavaScript"
    return "Java" 
  }
  
  else return "mocha_missing!"
}
  //https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript