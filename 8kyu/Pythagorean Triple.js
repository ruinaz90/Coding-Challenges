function isPythagoreanTriple(integers) {
    // Good luck friends!
    integers.sort((a, b) => a - b)
    return (integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2)
  }
  //https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript