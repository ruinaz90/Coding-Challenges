var number = function(busStops){
  // Good Luck!
  let total = 0
  for(let element of busStops) {
    total += element[0]
    total -= element[1]
  }
  return total
}
