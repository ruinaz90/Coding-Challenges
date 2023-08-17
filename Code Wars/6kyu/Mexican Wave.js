function wave(str){
    let array = []
    for(let i = 0; i < str.length; i++) {
        array.push(str.split("").map((element, index) => index == i ? element.toUpperCase() : element).join(""))
    }
    array = array.filter(element => element != element.toLowerCase())
    return array
}
