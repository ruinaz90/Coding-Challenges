function shortenToDate(longDate) {
    // your code here
    longDate = longDate.replace(',', '')
    const shortDate = longDate.split(' ')
    return `${shortDate[0]} ${shortDate[1]} ${shortDate[2]}`
  }
  //https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript