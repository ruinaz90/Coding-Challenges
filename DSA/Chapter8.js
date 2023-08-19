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

/* 2. Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array. */
function firstDupe(strings) {
    let hash = {}

    for(let letter of strings) {
        if(hash[letter])
            return letter
        else hash[letter] = true
    }
}

const strings = ["a", "b", "c", "d", "c", "e", "f"]
console.log(firstDupe(strings))

/* 3. Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". */
function missingLetter(string) {
    let hash = {}
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for(let letter of string) {
        hash[letter] = true
    }

    for(let letter of alphabet) {
        if(!hash[letter]) return letter
    }
}

const string = "the quick brown box jumps over a lazy dog"
console.log(missingLetter(string))

/* 4. Write a function that returns the first non-duplicated character in a string. For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. */
function nonDupe(string) {
    let hash = {}

    for(let letter of string) {
        hash[letter] = (hash[letter] || 0) + 1
    }

    for(let letter of string) {
        if(hash[letter] == 1) return letter
    }
}

const stringDupe = "minimum"
console.log(nonDupe(stringDupe))