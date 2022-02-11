// 1) Make an array of numbers that are doubles of the first array

// const numbers = [2, 5, 100]

//     let result = numbers.map(num =>{
//         return num *2
//     })
  
//   console.log(result); // [4, 10, 200]





// 2) Take an array of numbers and make them strings

//   const arrayOfNumbers = [2, 5, 100]

//     let result = arrayOfNumbers.map(string => {
//         return string + ""
//     })

//     console.log(result)




// 3) Capitalize each of an array of names

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// let result = names.map(capFirst => {
//     capFirst = capFirst[0].toUpperCase() + capFirst.slice(1).toLowerCase()
//     return capFirst
// })

// console.log(result)




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

const finalNames = [
    {
    name: "Angelina Jolie",
    age: 80
},
{
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kayne West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}]

let result = finalNames.map(newName => {
    return ``
})
// need help on this one, not sure how to return the names wrapped in an h1 tag and age in an h2
console.log(result)