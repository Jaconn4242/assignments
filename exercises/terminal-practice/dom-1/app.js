function newStuff(something){
   
   
    let howmany = 0

    for(let i = 0; i < something.length; i++){
        
        if(something[i] === "o"){
            
            howmany++
        }
        
    }
    
    return howmany
}

console.log(newStuff("oranges are great sometimes and only at lunch"))
console.log(newStuff("hello world"))
console.log(newStuff("colton is awesome"))



                    