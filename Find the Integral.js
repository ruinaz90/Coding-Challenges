function integrate(coefficient, exponent) {
    const newExp = exponent + 1
    const newCoeff = coefficient / newExp
    return `${newCoeff}x^${newExp}`
  }
  //https://www.codewars.com/kata/59811fd8a070625d4c000013/train/javascript