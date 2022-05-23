var capitals = function (word) {
	// Write your code here
  let indexes = []
  for(let i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase())
      indexes.push(i)
  }
  return indexes
};
