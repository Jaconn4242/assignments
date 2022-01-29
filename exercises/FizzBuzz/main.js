// for (i=1;i<100;i++){
//     console.log(i + ((i%3)==0?"fizz":"") + ((i%5)==0?"buzz":""));
//     }
// this is awesome above!

let i;
for(i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log("fizzbuzz" + " ")
    } else if(i % 3 === 0){
        console.log("fizz" + " ")
    } else if(i % 5 === 0){
        console.log("buzz" + " ")
    } else
        console.log(i)
}
    
   






    
    