//https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
/*Given a string of characters, return the character that appears the most often.
No String or Array Methods (well brute force it first, but then no methods)!*/

const max = string => {
  const characters = {};

  for (let character of string)
    characters[character] = characters[character] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};
