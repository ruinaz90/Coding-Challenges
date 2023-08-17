function min(arr, toReturn) {
    // TODO
    const smallest = Math.min(...arr), smallestIndex = arr.indexOf(Math.min(...arr))
    switch(toReturn) {
        case "value":
        return smallest
        
        case "index":
        return smallestIndex
    }
  }
  //https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript