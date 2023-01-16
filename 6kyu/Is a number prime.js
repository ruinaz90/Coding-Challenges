
function isPrime(num) {
  //TODO
  // Check if n=1 or n=0
  if (num <= 1)
    return false
  // Check if n=2 or n=3
  if (num == 2 || num == 3)
      return true
  // Check whether n is divisible by 2 or 3
  if (num % 2 == 0 || num % 3 == 0)
      return false
  // Check from 5 to square root of n
  // Iterate i by (i+6)
  for (let i = 5; i <= Math.sqrt(num); i = i + 6)
    if (num % i == 0 || num % (i + 2) == 0)
      return false
 
  return true
}
