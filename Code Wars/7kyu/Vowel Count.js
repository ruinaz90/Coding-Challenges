function getCount(str) {
    let vowelsCount = 0;
    
    // enter your majic here
    for(let i = 0; i < str.length; i++) {
      if (str[i] == 'a' || str[i] == 'e' ||  str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowelsCount++
      }
    }
    return vowelsCount;
  }
  //https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript