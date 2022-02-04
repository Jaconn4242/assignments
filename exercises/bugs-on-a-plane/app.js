const form = document.querySelectorAll("airline-form");
const submit = document.getElementById("submit")

  

console.log(location)

function formAlert() {
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let age = document.getElementById("age").value
    let gender = new Array()
    if (document.getElementById("myRadio").checked) {
        gender.push(document.getElementById("myRadio").value);
    }
    if  (document.getElementById("myRadio1").checked) {
        gender.push(document.getElementById('myRadio1').value);
    }
    if (document.getElementById("myRadio2").checked) {
        gender.push(document.getElementById('myRadio2').value);
    }
    let location = document.getElementById("travel-location").value
    let diet = new Array()
    if (document.getElementById("vegan").checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (document.getElementById("gluten").checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (document.getElementById("paleo").checked) {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    formAlert()
})
 

