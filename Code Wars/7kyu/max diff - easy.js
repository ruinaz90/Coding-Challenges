function maxDiff(list) {
    if(list.length <= 1)
        return 0
    const smallest = Math.min(...list), largest = Math.max(...list)
    return largest - smallest
}
//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/solutions/javascript