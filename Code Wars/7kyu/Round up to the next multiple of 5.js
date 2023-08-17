//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
function roundToNext5(n){
    if(n % 5 === 0)
      return n
    else {
      let next = n
      while(next % 5 !== 0)
        next++
      return next
    }
  }