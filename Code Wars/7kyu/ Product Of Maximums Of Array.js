function maxProduct(numbers, size){
    numbers.sort((a, b) => b - a)
    const shortenedArray = numbers.slice(0, size)
    const product = shortenedArray.reduce((acc, val) => acc * val, 1)
    return product
}
