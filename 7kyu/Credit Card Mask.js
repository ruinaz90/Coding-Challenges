// return masked string
function maskify(cc) {
    return `${cc.substring(0, cc.length - 4).split("").map(letter => "#").join("")}${cc.substring(cc.length - 4)}`
}