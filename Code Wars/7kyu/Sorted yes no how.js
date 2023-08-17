function isSortedAndHow(array) {
    if(array.every((number, index) => index == 0 || array[index] >= array[index - 1]))
        return "yes, ascending"

    else if(array.every((number, index) => index == 0 || array[index] <= array[index - 1]))
        return "yes, descending"

    else
        return "no"
}
