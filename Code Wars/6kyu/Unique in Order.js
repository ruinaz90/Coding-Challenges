var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  return [...iterable].filter((element, index) => element !== iterable[index + 1])
}
