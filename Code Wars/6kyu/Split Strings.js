function solution(str){
  let pairs = []
  let letters = str.split("")
  if(letters.length % 2 !== 0)
    letters.push("_")
  
  for(let i = 0; i < letters.length; i++) {
    pairs.push(letters[i] + letters[i + 1])
    letters.shift()
  }
  return pairs
}
