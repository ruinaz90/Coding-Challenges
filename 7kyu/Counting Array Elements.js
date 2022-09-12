function count(array){
    let numElement = {}
    for(let element of array)
        numElement[element] = numElement[element] ? numElement[element] + 1 : 1
    return numElement
}
