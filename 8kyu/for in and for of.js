function giveMeFive(obj){
    //coding here
    let five = []
    for(let key in obj) {
      if(key.length === 5) {
        five.push(key)
      }
      if(obj[key].length === 5) {
        five.push(obj[key])
      }
    }
    return five
  }
  //https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript