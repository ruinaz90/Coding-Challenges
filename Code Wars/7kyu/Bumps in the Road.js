function bump(x){
  return x.split('').filter(bump => bump === "n").length > 15 ? "Car Dead" : "Woohoo!"
}
