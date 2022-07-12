function closeCompare(a, b, margin){
    if(margin >= Math.abs(a - b)) return 0
    else {
      if(a < b) return -1
      else if(a > b) return 1
      return 0
    }
  }
//https://www.codewars.com/kata/56453a12fcee9a6c4700009c/solutions/javascript  