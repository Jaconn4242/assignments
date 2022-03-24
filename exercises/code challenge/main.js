const array = ["#3", "$$$", "C%4!", "Hey!", "!"];

function findCharacters(array, character) {
    const charArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].includes(character)) {
      charArray.push(array[i])
    }
  }
  return charArray
}
console.log(findCharacters(array, "!"));






