function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     this.isWorthIt = function() {
       return draft - 1.5 * this.crew > 20
     }
   }
   
   //YOUR CODE HERE...
   //https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript