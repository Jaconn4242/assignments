const myForm = document.myForm

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let firstName = myForm.firstName.value
    let lastName = myForm.lastName.value
    let age = myForm.age.value
    let gender = myForm.gender.value
    let destination = document.getElementById("location").value
    // why didn't destination work with myForm.location.value
    console.log(destination)
    
    let checkedDiets = []
    for(let i = 0; i < myForm.location.length; i++){
        if(myForm.location[i].checked){
            checkedDiets.push(myForm.location[i].value)
        }
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDiet: " + checkedDiets )
})
