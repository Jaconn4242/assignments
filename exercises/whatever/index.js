const startButton = document.querySelector(".start-button")
const stopButton = document.querySelector(".stop-button")
const timer = document.getElementById("timer")
const resultInput = document.querySelector(".result-input")

let count = 0
timer.textContent = count

function increment(){
    count ++
    timer.textContent = count
    localStorage.setItem("count", count)
}


let validate
startButton.addEventListener("click", () => {
    validate = setInterval(increment, 100)
    resultInput.value = JSON.parse(localStorage.getItem("count"))
})

stopButton.addEventListener("click", () => {
    clearInterval(validate)
})

function game (){
   
}









