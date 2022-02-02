const words = ["hello", "$%", "#r$%", "Hey8e3", "789^*"]


const ReturnStringsWithLetters = (words, char) => {
    let arrayWithLetters = new Array()
    for(i = 0; i < words.length; i++){
       if(words[i].includes(char)){
           arrayWithLetters.push(words[i])
       }
        
    }
    return arrayWithLetters
}

console.log(ReturnStringsWithLetters(words, "e"))