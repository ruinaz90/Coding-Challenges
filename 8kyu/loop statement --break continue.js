function grabDoll(dolls){
    var bag=[];
    //coding here
    for(let doll of dolls) {
      if(bag.length === 3) {
        break
      }
      if (doll === "Hello Kitty" || doll === "Barbie doll") {
        bag.push(doll)
      }
      else continue
    }
    return bag
  }
  //https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript