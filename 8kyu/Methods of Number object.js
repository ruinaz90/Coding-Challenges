function colorOf(r,g,b){
    //coding here
    r.toString(16).length === 2 ? r = r.toString(16) : r = `0${r.toString(16)}`
    g.toString(16).length === 2 ? g = g.toString(16) : g = `0${g.toString(16)}`
    b.toString(16).length === 2 ? b = b.toString(16) : b = `0${b.toString(16)}`
    return `#${r}${g}${b}`
  }

  //https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript