function toCamelCase(str){
  const words = str.split(/[-_]/)
  const cased = words.slice(1).map(element => element[0].toUpperCase() + element.slice(1))
  return `${words[0]}${cased.join("")}`
}
