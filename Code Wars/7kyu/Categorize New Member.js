function openOrSenior(data){
  // ...
  let list = []
  for(let element of data) {
    if(element[0] >= 55 && element[1] > 7)
      list.push("Senior")
    else
      list.push("Open")
  }
  return list
}
