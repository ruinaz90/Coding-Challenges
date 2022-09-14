function lastSurvivor(letters, coords) {
    let lettersArr = letters.split('')

    for(let i = 0; i < coords.length; i++) {
        lettersArr.splice(coords[i], 1)
    }

    return lettersArr.join('')
}
