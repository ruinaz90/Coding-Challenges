function sumCubes(n){
    // ...
    let cubed = 0, total = 0
    for(let i = 1; i <= n; i++) {
      cubed = i ** 3
      total += cubed
    }
    return total
  }