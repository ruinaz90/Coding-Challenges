String.prototype.toJadenCase = function () {
    const array = this.split(" ")
    const newArray = array.map(element => element[0].toUpperCase() + element.slice(1))
    return newArray.join(" ")
}
