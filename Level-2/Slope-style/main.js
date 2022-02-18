// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
// function collectAnimals(...animals) {
//     return {animals}
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))






// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes
//  useful when a variable name is mentioned twice in both the name and value of properties in your object:
// function combineFruit(fruit, sweets, ...vegetables){
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],["cake", "pie"], ["carrot"]))





// Use destructuring to use the property names as variables. Desructure the object in the parameter:
// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//  travelSpot = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }

//   console.log(parseSentence(travelSpot))




// Use array destructuring to make this code ES6:
// const returnFirst = items => {
//     const [firstItem] = items; /*change this line to be es6* it was const firstItem = items[0] */
//     return firstItem
// }

// console.log(returnFirst(["firstThing"]))
// Not sure if I'm doing this one right=============================





// Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   if(username != "sam" || password != "123abc"){
//       throw new Error("Invalid username or password, please check your entry and try again")
//   } else {
//       return "login successful"
//   }
// }
// try{
//     console.log(login("sam", "123abc"))
// }
// catch(err){
//     console.log(err)
// }




// Write destructuring code to assign variables that
//  will help us return the expected string. Also, change the string to be using Template literals:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav] = arr
//     const secondFav = arr[1]
//     const thirdFav = arr[2]
//     return `My top three favorite activities are, ${firstFav},${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(["hiking", "coding", "sleeping"]))
// ====================have instructor review this code, it works==========================================





// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
//  You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to.
// function combineAnimals(real,magical,mysterious) {
// return [...real, ...magical, ...mysterious]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus", "unicorn"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));





// Try to make the following function more ES6y:
// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// const product = (a, ...b) => {
//     let numbers = [...a, ...b];
//     return numbers.reduce((acc, number) => {
//         return acc * number
//     }, 1)
// }
// console.log(product("5", "2", "6"))

// Below is another way to make it work but not using the rest and only accepting strictly 4 paremeters/numbers in this case.

// let numbers = ["1", "2", "3", "4"]
// const products = (num1, num2, num3, num4) => {
//     let result =  num1.reduce((final, number) => {
//         final = final * number
//         return final
//     }, 1)
//     return result
// }
// console.log(products(numbers))





// Make the following function more ES6y. Use at least both the rest and spread operators:
// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

// const unshift = (array, ...a) => {
//     return [...a, ...array];
// }
// console.log(unshift(["this","comes last"], ["first", "as seen in function"]))
// The second array brackets here are not opened but they are closed? ==============================================

// Write some destructuring code to help this function out. 
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

const populatePeople = names => {
    return names.map(name => {
        name = name.split(" ");
        const [firsName] = name;
        const lastName = name[1];
        return `First name: ${firsName}, Last name: ${lastName}`
    })
}
console.log(populatePeople(["Frank Peterson", "Suzy Degaul", "Liza Jones"]))






