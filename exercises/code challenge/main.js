const walk = ['w','s','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false
  }
  let northCount = new Array
  let southCount= new Array
  let westCount = new Array
  let eastCount = new Array
  for (i=0; i < walk.length; i++){
    if (walk[i] === "n") {
      northCount.push(i)
    } else if (walk[i] === "s"){
      southCount.push(i)
    } else if (walk[i] === "w"){
      westCount.push[i]
    } else if (walk[i] === "e") {
      eastCount.push[i]
    }
  }
  if ((eastCount.length === westCount.length) && (northCount.length === southCount.length)) {
      return true
      } else {
        return false
      }
}

console.log(isValidWalk(walk))






