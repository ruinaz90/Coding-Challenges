function DNAStrand(dna){
  //your code here
  let dnaArr = dna.split('')
  for(let i = 0; i < dnaArr.length; i++) {
    if(dnaArr[i] === 'A') dnaArr[i] = 'T'
    else if(dnaArr[i] === 'C') dnaArr[i] = 'G'
    else if(dnaArr[i] === 'G') dnaArr[i] = 'C'
    else if(dnaArr[i] === 'T') dnaArr[i] = 'A'
  }
  return dnaArr.join('')
}
