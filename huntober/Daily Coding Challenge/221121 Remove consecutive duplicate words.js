const removeConsecutiveDuplicates = s => // your perfect code...
{
  const words = s.split(" ")
  return words.filter((word, index) => word !== words[index + 1]).join(" ")
}

//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/solutions/javascript
