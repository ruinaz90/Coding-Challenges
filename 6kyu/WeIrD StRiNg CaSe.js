function toWeirdCase(string){
  //TODO
  return string.split(" ").map(word => word.split("").map((element, index) => index % 2 == 0 ? element.toUpperCase() : element.toLowerCase()).join("")).join(" ")
}