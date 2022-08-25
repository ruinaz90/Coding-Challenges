function eachCons(array, n) {
	let arr = []
  for(let i = 0; i < array.length; i++) {
    arr.push(array.slice(i, i + n))
  }
  return arr.filter(element => element.length === n)
}
//https://www.codewars.com/kata/545af3d185166a3dec001190/solutions/javascript