const readline = require("readline-sync")

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function ceasarCipher() {
    let result = new Array()
    for(let i = 0; i < input.length; i++){

        let charCode = input[i].charCodeAt();
        if (charCode > 96 && charCode < 123) {
            charCode += shift % 26
        
            if (charCode > 122) {
                charCode = (charCode - 122) + 96;
            }
        }    
        result.push(String.fromCharCode(charCode))

    }
    return result.join("")
}

console.log(ceasarCipher())




// let index = 1

// console.log(`The CharCode is ${input.charCodeAt(index)} and the character is ${input.charAt(index)}`)