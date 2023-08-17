function rowWeights(array){
    let team1Total = 0, team2Total = 0
    for(let i = 0; i < array.length; i++) {
      if(i % 2 == 0) team1Total += array[i]
      else team2Total += array[i]
    }
    return [team1Total, team2Total]
}
