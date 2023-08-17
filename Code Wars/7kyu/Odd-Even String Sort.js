function sortMyString(S) {
    // your code here
  let evenString = '', oddString = ''
    for(let i = 0; i < S.length; i++) {
      if(i % 2 === 0) {
        evenString += S[i]
      }
      else {
        oddString += S[i]
      }
    }
  return `${evenString} ${oddString}`
}
//https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript