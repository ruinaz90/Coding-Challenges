function minValue(values){
    let newVal = [...new Set(values)]
    return Number(newVal.sort().join(''))
}
//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/solutions/javascript