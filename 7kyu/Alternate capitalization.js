function capitalize(s){
    let string1 = "", string2 = ""
    for(let i = 0; i < s.length; i++){
      if(i % 2 === 0) {
        string1 += s[i].toUpperCase()
        string2 += s[i]
      }
      else {
        string1 += s[i]
        string2 += s[i].toUpperCase()
      }
    }
    return [string1, string2]
  };
//https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript