const ifDivisible = (num1, num2) => {
    let result = []
    if(num1 % num2 == 0){
        result.push("true")
    } else {
        result.push("false")
    
    }
    return result
}

console.log(ifDivisible(8,3))


