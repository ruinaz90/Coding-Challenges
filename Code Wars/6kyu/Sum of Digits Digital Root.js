function digitalRoot(n) {
  // ...
  let digits = Array.from(String(n), Number).reduce((acc, val) => acc + val, 0)
  console.log(digits)
  if(digits < 10)
    return digits
  return digitalRoot(digits)
}
