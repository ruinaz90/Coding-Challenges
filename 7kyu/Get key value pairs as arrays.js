function keysAndValues(data){
  // TODO: complete
  let keys = [], values = []
  
  for(let key in data) {
    keys.push(key)
    values.push(data[key])
  }
  return [keys, values]
}
