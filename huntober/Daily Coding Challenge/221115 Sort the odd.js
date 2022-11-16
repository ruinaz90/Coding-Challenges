function sortArray(arr){
    const oddNums = arr.filter(element => element % 2 !== 0).sort((a, b) => a - b)
    return arr.map(element => element % 2 === 0 ? element : oddNums.shift())
}

console.log(sortArray([7, 1]),'[ 1, 7]')
console.log(sortArray([5, 8, 6, 3, 4]),'[ 3, 8, 6, 5, 4 ]')

//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
