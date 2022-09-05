function wordSearch(query, seq){
    //your code here
    let array = []
    for(let word of seq) {
      if(word.toLowerCase().includes(query.toLowerCase()))
        array.push(word)
    }
    return array.length > 0 ? array : ['Empty']
  }
  //https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript