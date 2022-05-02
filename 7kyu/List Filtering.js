function filter_list(l) {
  // Return a new array with the strings filtered out
  let intArr = []
  for(let element of l) {
    if(typeof(element) === "number") intArr.push(element)
  }
  return intArr
}
