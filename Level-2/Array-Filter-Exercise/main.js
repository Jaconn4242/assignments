// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// const numbers = [5, 7, 2, 8, 12]

// const result = numbers.filter(num => {
//     if(num > 5)
//     return num 
// })

// console.log(result)




// 2) Given an array of numbers, return a new array that only includes the even numbers.
// const numbers = [5, 6, 7, 8, 9, 10]

// const result = numbers.filter(num => num % 2 ===0)

// console.log(result)




// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const strings = ["Dog", "Cat", "Rhino", "Buffalo", "Antelope", "Snake"]

// const result = strings.filter(lessThanFive => lessThanFive.length <= 5)

// console.log(result)





// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const people = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const peopleWhoBelong = people.filter(yesTheyBelong => yesTheyBelong.member === true)

// console.log(peopleWhoBelong)






// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const matrixMaybes = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const over18 = matrixMaybes.filter(yes => yes.age > 18)

console.log(over18)














