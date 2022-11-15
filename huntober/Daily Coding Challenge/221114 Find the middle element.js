// from https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(array) {
    const middle = [...array].sort((a, b) => a - b)[1]
    return array.indexOf(middle)
}
