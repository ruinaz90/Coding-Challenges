function expandedForm(num) {
    // Your code here
    //P: number
    //R: string
    //E
    //P
    //convert number to string
    let numStr = String(num).split('')
    //loop through number string
    for(let i = 0; i < numStr.length; i++) {
      //loop backwards through number string
      for(let j = numStr.length - i; j > 1; j--) {
        //add 0 to end of number
        numStr[i] += '0'
      }
    }
    numStr = numStr.filter(number => !number.startsWith(0))
    //return joined string
    return numStr.join(' + ')
  }
  //https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript