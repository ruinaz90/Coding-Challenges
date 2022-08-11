function evil(n) {
    const binary = Array.from(n.toString(2))
    console.log(binary)
    let count = 0
    for(let number of binary) {
      if(number === '1')
        count++
    }
    return count % 2 === 0 ? "It's Evil!" : "It's Odious!"
  }
  //https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript