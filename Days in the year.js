if(year % 400 === 0) {
    return year + ' has 366 days';
  }
  else if(year % 4 === 0 && year % 100 !== 0) { //centuries 
    return year + ' has 366 days';
  }
  else {
    return year + ' has 365 days'; 
  }
  //https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/solutions/javascript