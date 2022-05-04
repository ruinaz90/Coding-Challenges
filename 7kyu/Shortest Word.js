function findShort(s){
  let strings = s.split(' ')
  let shortest = strings[0].length
  for(let i = 0; i < strings.length; i++) {
    if(strings[i].length < shortest)
      shortest = strings[i].length
  }
  return shortest
}
