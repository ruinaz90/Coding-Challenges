function count(array){
    let numElement = {}
    for(let element of array)
        numElement[element] = numElement[element] ? numElement[element] + 1 : 1
    return numElement
}
//https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript
