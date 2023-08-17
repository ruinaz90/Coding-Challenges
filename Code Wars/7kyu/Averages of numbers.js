function averages(numbers) {
    if(!numbers)
      return []
    let avg = []
    for(let i = 0; i < numbers.length - 1; i++)
      avg.push((numbers[i] + numbers[i + 1]) / 2)
    return avg
  }