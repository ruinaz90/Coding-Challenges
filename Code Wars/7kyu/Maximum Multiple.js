function maxMultiple(divisor, bound){
    let num = 0
    for(let i = divisor; i <= bound; i++) {
      if(i % divisor === 0)
        num = i
    }
    return num
  }