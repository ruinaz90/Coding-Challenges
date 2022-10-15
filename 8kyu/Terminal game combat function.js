https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
function combat(health, damage) {
    // Write your code here
    if(health - damage < 0) return 0
    return health - damage
  }