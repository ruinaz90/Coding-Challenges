function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code
    let total = [...arguments]
    let sum = total.reduce((acc, val) => acc + val * val, 0)
    return Math.floor(Math.sqrt(sum) / 2)
  }