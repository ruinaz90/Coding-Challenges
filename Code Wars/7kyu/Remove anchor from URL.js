function removeUrlAnchor(url){
  if(url.includes("#")) {
    let anchor = url.indexOf("#")
    return url.slice(0, anchor)
  }
  else return url
}
