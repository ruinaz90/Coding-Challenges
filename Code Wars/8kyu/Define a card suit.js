function defineSuit(card) {
  // good luck
  switch(card[card.length - 1]) {
      case "♣": return "clubs"
      case "♦": return "diamonds"
      case "♥": return "hearts"
      case "♠": return "spades"
  }
}
