function findScreenHeight(width, ratio) {
    // Happy coding :)
  const ratioNum = ratio.split(":")
  const height = Math.floor(width / (ratioNum[0] / ratioNum[1]))
  return `${width}x${height}`
}
//https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/solutions/javascript