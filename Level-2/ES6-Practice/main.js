// Replace all the vars with let and const. 
// Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). 
// You only need to delete var and insert let and const
// John is the pet owner, and his name should be stored differently than the other names.

// const owner = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet =  pets[i] 
//         let name 
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         petObjects.push(pet)
//     }
//     return petObjects
// }
// console.log("Owner name: ", owner)

// runForLoop(["cat", "dog"])




// Re-write this .map() using an arrow function:
// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function,
//  and not starting an object, so the : will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//      let result = arr.map(carrot => {
//         return  {something: "carrot", name: carrot} 
//     })
//     return result
// }
// console.log(mapVegetables(carrots))




// Re-write this .filter() ’s callback function using an arrow function:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr)  {
//     return arr.filter(person =>{
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

// OR THIS FUNCTION

// const friendlyOrNot = arr => {
//     let result = arr.filter(people => people.friendly)
//     return result
// }

// console.log(friendlyOrNot(people))





// Re-write the following functions to be arrow functions:
// const doMathSum = (a, b) =>{
//     return a + b
// }

// const produceProduct = (a, b) => {
//     return a * b
// }

// console.log(doMathSum(5, 7))
// console.log(produceProduct(5, 8))





// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// const firstName = "Jane"
// const lastName = "Doe"
// const age = 100

// const printString = (firstName, lastName, age) => {
//     return `Hi ${firstName} ${lastName} how does it feel to be ${age}?`
// }

// console.log(printString("Jane", "Doe", 100 ))





// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//       return arr.filter(animal => animal.type === "dog")
//  }
//  console.log(filterForDogs(animals))
// -------------------------------------Could I have shortened the function above?-------------------------------------------------





// Using template literals, write a function that takes `location` and `name` parameters and outputs a message formatted like this:
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

// const Welcome = (location, name) => {
//     return `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
// }

// console.log(Welcome("Las Angelos", "Jeff"))

 



// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animals) {
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))






// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes
//  useful when a variable name is mentioned twice in both the name and value of properties in your object:
// function combineFruit(fruit, sweets, vegetables){
//     return {fruit: fruit, sweets, vegetables}
// }


// console.log(combineFruit(["apple", "pear"],["cake", "pie"], ["carrot"]))
// May have done this wrong ----------------------------------------------------ask instructor------------------------------







