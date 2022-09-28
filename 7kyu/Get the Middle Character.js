function getMiddle(s)
{
  //Code goes here!
  const middleChar = Math.ceil((s.length / 2) - 1)
  return s.length % 2 == 0 ? s.slice(middleChar, middleChar + 2) : s.slice(middleChar, middleChar + 1)  
}
