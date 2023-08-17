function getSum( a,b )
{
   //Good luck!
  if(a == b) return a
  let min = a, max = b, sum = 0
  if(b < a) min = b, max = a
  for(let i = min; i <= max; i++){
    sum += i
  }
  return sum
}
