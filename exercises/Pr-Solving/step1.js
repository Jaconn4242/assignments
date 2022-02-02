const LargestFunction = (arr) => {
    let largest = [0]
    for(i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(LargestFunction([7, 35, 444, 456]))

// I created a function with the parameter "arr"
// then created the variable largest and set it equal to 0
// then created a for loop to run through the array being passed through
// if the arr[i] is larger than 0 then largest becomes that arr[i]
// finally returned that number because it returns the largest number
// console.logged the function with a random amount of numbers! it works




