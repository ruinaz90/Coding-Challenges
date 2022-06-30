function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  const phrases = ["tree fiddy", "3.50", "three fifty"]
  return phrases.some(phrase => s.includes(phrase))
}
