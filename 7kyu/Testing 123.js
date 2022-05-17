var number=function(array){
  //your awesome code here
  if(array == null || array.length == 0) return []
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(`${i + 1}: ${array[i]}`)
  }
  return arr
}
