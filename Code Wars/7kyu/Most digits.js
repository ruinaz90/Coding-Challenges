function findLongest(array){
    const arr = array.map(element => String(element))
    arr.sort((a, b) => b.length - a.length)
    return Number(arr[0])
}
