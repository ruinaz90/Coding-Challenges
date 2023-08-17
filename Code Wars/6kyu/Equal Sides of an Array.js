function findEvenIndex(arr)
{
  //P: arr (array)
  //R: number
  //E: 
  //P
  //loop through the array
  for(let i = 0; i < arr.length; i++) {
  //find sum on both sides of index
    //loop through left up to index
    //sum left up to index
    let sumLeft = 0
    for(let j = 0; j < i; j++) {
      sumLeft += arr[j]
    }
    console.log(sumLeft)
    //loop through right up to index
    //sum right up to index
    let sumRight = 0
    for(let k = arr.length - 1; k > i; k--) {
      sumRight += arr[k]
    }
    console.log(sumRight)
    //if left == right, return index
    if(sumLeft === sumRight)
      return i
  }
  return -1
}
//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript