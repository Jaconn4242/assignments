
for(let i = 1; i<100; i++){

   let sum = new Array()

   if(i % 3 === 0){
      sum.push(i)
   } 
   else if(i % 5 === 0){
      sum.push(i)
   }
  //  console.log(sum)
  

 
  function total(sum){
      let result = sum.reduce((final, num) => {
          final += num
          return final
      })
      console.log(result)
  }
}

