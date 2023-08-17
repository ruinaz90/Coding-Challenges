/* 1.  Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4]. */
function arrayIntersect(array1, array2) {
    let intersect = {}, array3 = []

    for(let num of array1) {
        intersect[num] = true
    }

    for(let num of array2) {
        intersect[num] && array3.push(num)
    }

    return array3
}

const array1 = [1, 2, 3, 4, 5], array2 = [0, 2, 4, 6, 8]
console.log(arrayIntersect(array1, array2))