
// take in a number and add each individual number in that number
// const OddishorEvenish = (num) => {

//     let string = num.toString().split("")
//     let final = string.reduce((final, num) => {
//            return final + Number(num)
//         }, 0)
//         if(final % 2 === 0){
//           return "Evenish"
//         } else {
//           return "Oddish"
//         }
    
// }



// console.log(OddishorEvenish(123))


// Sort by age youngest to oldest
// let test = [
//   {name: "john", age: "5"},
//   {name: "john", age: "10"},
//   {name: "john", age: "1"},
// ]



// function sortByAge(lineUpData){
//   let sortedPlayers = lineUpData.sort((a, b) => {
    
//       if(Number(a.age) < Number(b.age)){
//           return -1
//       }
//       if(Number(a.age) > Number(b.age)){
//           return 1
//       }
//       return 0
//   })
// return sortedPlayers
// }

// console.log(sortByAge(test))


// 
//Maira Soomro  11:39
//@channel Today's code challenge (also lmk if this was too easy and I'll pick something harder next week):
//Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc.
//  Return true if all element combinations add up to the same number. Otherwise, return false.
//Examples
//puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

//puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

//puzzlePieces([1, 2], [-1, -1]) ➞ false

//puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.
// Extra challenge (optional)
// Only run through the arrays ONCE. Stop iterating through the array once there's a mismatch.

// const puzzlePieces = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
//         return false
//     } else {
       
//         const sum = arr1.map((num, i) => num + arr2[i])
    
//         const result = sum.every(element => element === sum[0] ? true : false)
        
//       return result
//     }
// }

// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]))
// console.log(puzzlePieces([1, 2], [-1, -1]))
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]))


// const enemies = [
//     {
//         name: "Darius the Reaper",
//         health: 10,
//         itemsDropped: ["Sword of Death: Increases Attack damage by 5", "Medallion of the Reaper: Increases Health by 20"]
//     },

//     {
//         name: "Dextro of Mars",
//         health: 20,
//         itemsDropped: ["Emergency Health Vile"]
//     },

//     {
//         name: "Victra the Conquerer",
//         health: 15,
//         itemsDropped: ["Vile of Defense"]
//     }
// ]
// function randomEnemy() {
//     let enemyEncounter = Math.floor(Math.random() * 100);
//     if (enemyEncounter <= 50) {
//         return  enemies.splice(0,1)
//     } else if (enemyEncounter <= 75){
//         return  enemies.splice(1,2)
//     } else if (enemyEncounter <= 95){
//         return enemies.splice(2,3)
//     } else {
//         return console.log("You die")
//     }
// }
// let randomEM = randomEnemy();
// console.log(randomEM)



