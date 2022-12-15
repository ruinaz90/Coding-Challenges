function ransomNote(string, magazine) {
    let stringWords = string.split(" "), magazineWords = magazine.split(" ")
    const magazineHash = {}
    let possible = true

    for(let word of magazineWords) {
        magazineHash[word] = magazineHash[word] + 1 || 1
    }

    for(let word of stringWords) {
        if(magazineHash[word]) {
            magazineHash[word]--
            if(magazineHash[word] < 0) return false
        }
        else return false
    }

    return possible
}

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

console.log(ransomNote("sit ad est sint", magazine), "true")
console.log(ransomNote("sit ad est love", magazine), "false")
console.log(ransomNote("sit ad est sint in in", magazine), "true")
console.log(ransomNote("sit ad est sint in in in in", magazine), "false")
