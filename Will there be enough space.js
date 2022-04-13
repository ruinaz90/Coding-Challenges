function enough(cap, on, wait) {
  // your code here
  return cap - on > wait ? 0 : wait - (cap - on)
}
