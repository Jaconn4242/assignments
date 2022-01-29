// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
// const makeUppercase = (str) => {
//     let result = str.toUpperCase()
//     return result + str
// }

// console.log(makeUppercase("hello"))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// const halfLength = (str) => {
//     result = new Array()
//     if(str.length % 2 == 0){
//         result = (str.length / 2);
//     } else {
//         result = (str.length - 1) / 2;
//     }
//     return result
// } 

// console.log(halfLength("Hello"))

// or

// const halfLength2 = (str) => {
//     let result =  str.length / 2
//     return Math.floor(result)
// }

// console.log(halfLength2("Hello World"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
// const firstHalf = (strs) => {
    
//     let half = Math.floor(strs.length / 2)
//     let final = strs.slice(0, half)
//     return final
// }

// console.log(firstHalf("Hello World"))

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// const firstUppersecondLower = (str) => {
//     let half = Math.floor(str.length / 2);
//     let fFinal = str.slice(0, half);
//     let sFinal = str.slice(half);
//     return fFinal.toUpperCase() + sFinal.toLowerCase()
// }
// console.log(firstUppersecondLower("Hello World"))

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

// const capitlizeFirstLetter = (str) => {
//     let splitstr = str.toLowerCase().split(" ");
//     for(i = 0; i < splitstr.length; i++){
//         splitstr[i] = splitstr[i].charAt(0).toUpperCase() + splitstr[i].slice(1);
//     }
//     return splitstr.join(" ");
// }

// console.log(capitlizeFirstLetter("I really hope that this works"))

function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}


var jeep = new Car("Jeep", "Cherokee", 1995)

console.log(jeep)