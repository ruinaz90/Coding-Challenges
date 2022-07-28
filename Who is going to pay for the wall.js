function whoIsPaying(name){
    //your code here
    if(name.length <= 2) return [name]
    else return [name, name.slice(0, 2)]
  }
  //https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript