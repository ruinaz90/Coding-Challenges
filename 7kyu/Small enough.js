function smallEnough(a, limit){
    for(let element of a) {
      if(element > limit) return false
    }
    return true
  }