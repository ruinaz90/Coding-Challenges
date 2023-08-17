function countDevelopers(list) {
  // your awesome code here :)
  return list.filter(element => element.continent === 'Europe' && element.language === 'JavaScript').length
}
