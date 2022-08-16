function meeting(s) {
    // your code
  let names = s.toUpperCase().split(';')
  names = names.map(name => name.split(':').reverse().join(', '))
  names.sort()
  return names.map(name => `(${name})`).join('')
}
//https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript