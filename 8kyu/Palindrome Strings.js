function isPalindrome(line) {
  let str = String(line)
  return str === str.split('').reverse('').join('')
}
