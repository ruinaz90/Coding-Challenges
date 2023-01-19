function deleteNth(arr,n){
    // ...
    let count = {}, newArr = []

    for(let element of arr) {
        if(count[element]) {
            if(count[element] < n) {
                newArr.push(element)
            }
            count[element] += 1
        }
        else {
            newArr.push(element)
            count[element] = 1
        }
    }
    return newArr
}