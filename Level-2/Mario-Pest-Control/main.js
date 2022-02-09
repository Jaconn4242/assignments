const myForm = document.myForm

myForm.addEventListener("submit",(e) =>{
    e.preventDefault()
    let goombas = myForm.goombas.value
    let bombs = myForm.bobOmbs.value
    let cheeps = myForm.cheepCheeps.value
    let result = myForm.result.value

    function sum(x, y, z){
        return Number(x*5) + Number(y*7) + Number(z*11)
    }

    myForm.result.value = sum(goombas, bombs, cheeps) 

    console.log(result)
    
})
