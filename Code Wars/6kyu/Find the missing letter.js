function findMissingLetter(array)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const start = alphabet.indexOf(array[0].toLowerCase())
  
  for(let i = 0; i < array.length; i++) {
    if(array[i].toLowerCase() !== alphabet[start + i]) {
      if(array[i].toLowerCase() === array[i])  
        return alphabet[start + i]
      else return alphabet[start + i].toUpperCase()
    }
  }
}
