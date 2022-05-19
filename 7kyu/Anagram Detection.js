// write the function isAnagram
var isAnagram = function(test, original) {
  if(test.length == original.length) {
    let testLower = test.toLowerCase().split('').sort().join(''),
        originalLower = original.toLowerCase().split('').sort().join('')
    return testLower === originalLower
  }
  return false
};
