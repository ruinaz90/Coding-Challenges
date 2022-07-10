function solution(value){
    //...
    const string = String(value)
    if(string.length == 1)
      return `Value is 0000${string}`
    else if(string.length == 2)
      return `Value is 000${string}`
    else if(string.length == 3)
      return `Value is 00${string}`
    else if(string.length == 4)
      return `Value is 0${string}`
    else if(string.length == 5)
      return `Value is ${string}`
  }
  //https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript