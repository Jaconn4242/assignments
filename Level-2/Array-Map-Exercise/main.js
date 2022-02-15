// 1) Make an array of numbers that are doubles of the first array

// const numbers = [2, 5, 100]

//     let result = numbers.map(num =>{
//         return num *2
//     })
  
//   console.log(result); // [4, 10, 200]

// SEE IT IN A FUNCTION BELOW ----------------------------

// function double(arr){
//     let result = arr.map(num => num * 2)
//     return result
// }

// console.log(double(numbers))




// 2) Take an array of numbers and make them strings

//   const arrayOfNumbers = [2, 5, 100]

//     let result = arrayOfNumbers.map(string => {
//         return string + ""
//     })

//     console.log(result)

// SEE IT IN A FUNCTION BELOW ----------------------------

// function makeStrings(arr){
//     let result = arr.map(string => string + "")
//     return result
// }

// console.log(makeStrings(arrayOfNumbers))




// 3) Capitalize the first letter of each name in this array of names

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// let result = names.map(capFirst => {
//     capFirst = capFirst[0].toUpperCase() + capFirst.slice(1).toLowerCase()
//     return capFirst
// })

// console.log(result)

// function capitalizeFirstLetters(arr){
//     let result = arr.map(letter => {
//         letter = letter[0].toUpperCase() + letter.slice(1).toLowerCase()
//         return letter
//     })
//     return result
// }
// console.log(capitalizeFirstLetters(names))




// 4) Make an array of strings of the names

// const names = [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// let result = names.map(justNames => {
//     return justNames.name
// })

// console.log(result)

// SEE IT SOLVED IN A FUNCTION BELOW ------------------------------------------------

// function justNames(arr){
//     let result = arr.map(person => {
//         return person.name
//     })
//     return result
// }

// console.log(justNames(names))




// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

// const nameOfStrings = [{
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]

// function canGoToTheMatrix(arr){
//     let result = arr.map(going => {
//         if(going.age > 18){
//             return going.name + "is old enough to go to the Matrix"
//         }else {
//             return going.name + "is Not old enough to go to the Matrix"
//         }
//     })
//     return result
// }

// console.log(canGoToTheMatrix(nameOfStrings))

// Below is solving WITHOUT using a function --------
// let result = nameOfStrings.map(matrixCheck =>{
//     if (matrixCheck.age < 18){
//         console.log(matrixCheck.name + "is under age!!")
//     } 
//     else {
//         console.log(matrixCheck.name + "can go to The Matrix")
//     }    
//         return matrixCheck
// })
// console.log(result)





// 6) Make an array of the names in h1s, and the ages in h2s

// const finalNames = [
//     {
//     name: "Angelina Jolie",
//     age: 80
// },
// {
//     name: "Eric Jones",
//     age: 2
// },
// {
//     name: "Paris Hilton",
//     age: 5
// },
// {
//     name: "Kayne West",
//     age: 16
// },
// {
//     name: "Bob Ziroll",
//     age: 100
// }]


// function elementWrap(arr){
//     // Below is just EXTRA ------ ORGANIZED THEM BY AGE.  USE AS REFERENCE FOR LATER
//     // const result = arr.sort((a,b) => {
//     //     if(a.age < b.age){
//     //         return -1
//     //     }
//     //     if(a.age > b.age){
//     //         return 1
//     //     }
//     //     return 0
//     // })
//     // END OF EXTRA -----------------------------------------------------------
   
//     const domResult = finalNames.map(item => {
//         return "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>"
//     })
//     return domResult
// }
   
// console.log(elementWrap(finalNames))