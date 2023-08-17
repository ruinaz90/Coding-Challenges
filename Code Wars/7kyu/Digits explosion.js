function explode(s) {
  let stringArr = s.split('')
  return stringArr.map(number => number.repeat(number)).join('')
}
