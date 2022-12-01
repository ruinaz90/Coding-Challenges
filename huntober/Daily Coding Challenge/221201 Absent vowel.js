function absentVowel(x){
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let letter of vowels) {
    if(x.indexOf(letter) == -1)
      return vowels.indexOf(letter)
  }
}
//https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript
