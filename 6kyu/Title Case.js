function titleCase(title, minorWords) {
    let minors
    let titles = title.split(" ").map(element => element[0].toUpperCase() + element.toLowerCase().slice(1))
    
    minors = (minorWords || "").toLowerCase().split(" ")
    for(let i = 0; i < minors.length; i++) {
        titles = titles.map((word, index) => word.toLowerCase() == minors[i] && index > 0 ? word.toLowerCase() : word)
    }
    return titles.join(" ")
}
