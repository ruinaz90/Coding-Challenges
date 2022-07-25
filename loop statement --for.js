function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let number of arr) {
      if(number % 2 === 0)
        even.push(number)
      else
        odd.push(number)
    }
    
    return [odd,even];
  }
  //https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript