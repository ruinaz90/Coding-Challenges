function newAvg(arr, newavg) {
    let sum = arr.reduce((acc, val) => acc + val, 0)
    let missingNo = Math.ceil(newavg * (arr.length + 1) - sum)
    if(missingNo <= 0) {
        throw "Expected New Average is too low"
    }
    else return missingNo
}
