function dup(s) {
  return s.map((element) => element.split("").filter((letter, index, array) => letter != array[index + 1]).join(""))
}
//https://www.codewars.com/kata/59f08f89a5e129c543000069/solutions/javascript
