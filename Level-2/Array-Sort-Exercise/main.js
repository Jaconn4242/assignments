// 1) Sort an array from smallest number to largest
// const numbers = [2, 4, 6, 34, 52, 3, 91, 14]

// numbers.sort((a,b) => a - b)
// console.log(numbers)

// TO USE IN FUNCTION SEE BELOW ----------------------------------------------------------

// function smallestToLargest(arr){
//     let result = arr.sort((a,b) => a - b)
//     return result
// }
// console.log(smallestToLargest(numbers))




// 2) Sort an array from largest number to smallest

// const numbers = [ 1, 2, 3, 4, 5, 6, 7, 78, 46, 22, 33, 39]

// numbers.sort((a, b) => b - a)
// console.log(numbers)

// TO USE IN FUNCTION SEE BELOW ----------------------------------------------------------

// function reverseNumbers(arr){
//     let result = arr.sort((a,b) => b - a)
//     return result
// }
// console.log(reverseNumbers(numbers))


// 3) Sort an array from shortest string to longest

// const stringArr = ["dog", "wolf", "by", "family", "eaten"]

// stringArr.sort((a, b) => a.length - b.length )

// console.log(stringArr)

// TO USE IN FUNCTION SEE BELOW ----------------------------------------------------------

// function shortestToLongest(arr){
//     let result = arr.sort((a,b) => a.length - b.length)
//     return result
// }
// console.log(shortestToLongest(stringArr))




// 4) Sort an array alphabetically

// const stringArray = ["dog", "wolf", "by", "family", "eaten", "alphabet"]

// stringArray.sort((a, b) => a.localeCompare(b));
// console.log(stringArray)

// FOR USE IN A FUNCTION SEE BELOW -----

// function sortAlpha(arr){
//     let newNew = arr.sort((a, b) => a.localeCompare(b))
//     return newNew
// }
// console.log(sortAlpha(stringArray))




// 5) Sort the objects in the array by age
// const people = [
//     { name: "Quiet Samurai", age: 22 },
//     { name: "Arrogant Ambassador", age: 100 },
//     { name: "Misunderstood Observer", age: 2 },
//     { name: "Unlucky Swami", age: 77 }
// ]
// function sortByAge(arr){
//     let ageSort = arr.sort((a, b) => {
//         if(a.age < b.age){
//             return -1
//         }
//         if(a.age > b.age){
//             return 1
//         }
//         return 0
//     })
//     return ageSort
// }

// console.log(sortByAge(people))

// orrrrrrrrrrrrr this!!!!!!!!!!!!!!!!!!!!!! BELOW 11111111111111111111!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function sortByAge(arr){
//     let ageSort = arr.sort((a, b) => a.age - b.age)
//     return ageSort
// }

// console.log(sortByAge(people))