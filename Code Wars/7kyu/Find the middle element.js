function gimme (triplet) {
    let copiedTriplet = [...triplet]
    copiedTriplet.sort((a, b) => a - b)
    const middle = copiedTriplet[1]
    return triplet.indexOf(middle)
}
