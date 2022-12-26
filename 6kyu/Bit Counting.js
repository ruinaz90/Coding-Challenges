var countBits = function(n) {
  // Program Me
  return Array.from(n.toString(2), Number).reduce((acc, val) => acc + val, 0)
};

//https://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript
