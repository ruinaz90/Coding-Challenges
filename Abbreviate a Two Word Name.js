function abbrevName(name){
    let splitName = name.split(' ')
    return `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}`
  }
  //https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript