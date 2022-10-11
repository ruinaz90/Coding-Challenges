String.prototype.camelCase=function(){
    if(this.length == 0) return ""
    let words = this.trim().split(" ")
    const camel = words.map(element => element[0].toUpperCase().concat(element.slice(1)))
    return camel.join("")
}
