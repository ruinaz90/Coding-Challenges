function dontGiveMeFive(start, end)
{  
  let numbers = []
  for(let i = start; i <= end; i++) {
    if(!String(i).includes('5')) numbers.push(i)
  }
  console.log(numbers)
  return numbers.length
}
