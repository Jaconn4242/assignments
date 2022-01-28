var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
var length = fruit.push("1")
vegetables.push("3")
var food = fruit.concat(vegetables)
food.splice(4, 2)
var foodReversed = food.reverse()
var FinalResult = foodReversed.join(",")
console.log(FinalResult)

