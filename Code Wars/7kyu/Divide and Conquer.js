function divCon(x){
    let sumNum = 0, sumStr = 0, strCount = 0
    for(let i = 0; i < x.length; i++) {
      if(typeof x[i] === "string") {
        strCount++
        sumStr += Number(x[i])
      }
      else {
        sumNum += x[i]
      }
    }
    return sumNum - sumStr
  }
  //https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript