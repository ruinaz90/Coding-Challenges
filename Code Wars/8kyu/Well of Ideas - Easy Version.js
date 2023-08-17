function well(x){
  let goodCount = x.filter(val => val === "good").length
  if(goodCount > 2) return "I smell a series!"
  else if(goodCount > 0) return "Publish!"
  else return "Fail!"
}
