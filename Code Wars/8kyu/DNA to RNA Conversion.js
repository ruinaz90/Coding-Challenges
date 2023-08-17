function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let splitDNA = dna.split('')
    for(let i = 0; i < splitDNA.length; i++) {
      splitDNA[i] = splitDNA[i].replace('T', 'U')
    }
    return splitDNA.join('')
  }
  //https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript