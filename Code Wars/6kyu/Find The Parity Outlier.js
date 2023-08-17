function findOutlier(integers){
  //your code here
  let even = integers.filter(number => number % 2 === 0)
  let odd = integers.filter(number => number % 2 !== 0)
  return even.length > odd.length ? odd[0] : even[0]
}
