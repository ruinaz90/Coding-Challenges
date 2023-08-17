function fakeBin(x){
    return x.split('').map(number => number < 5 ? '0' : '1').join('')
  }
  //https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript