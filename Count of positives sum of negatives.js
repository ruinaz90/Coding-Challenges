function countPositivesSumNegatives(input) {
    if(input == null || input.length < 1)
        return []
    else {
        let numOfPositives = 0, sumOfNegatives = 0
        for(let number of input) {
            if(number > 0)
                numOfPositives++
            else {
                sumOfNegatives += number
            }
        }
        return [numOfPositives, sumOfNegatives]
    }
}
