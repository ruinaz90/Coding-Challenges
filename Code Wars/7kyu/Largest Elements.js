function largest(n,xs){
    if(n === 0)
        return []
    let top = []
    xs.sort((a, b) => b - a)
    for(let i = 0; i < n; i++) {
        top.unshift(xs[i])
    }
    return top
}
