function firstToLast(str,c){
    //coding here..tr.lastIndexOf(c) - str.indexOf(c)
    if(str.indexOf(c) === -1) return -1
    return str.lastIndexOf(c) - str.indexOf(c)
  }
  //https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript