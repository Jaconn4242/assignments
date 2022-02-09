const header = document.getElementById("instructions")
const display = document.getElementById('time-display');
const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const resultInput = document.getElementById("resultInput")
let counter = document.getElementById("counter")

resultInput.value = `${JSON.parse(localStorage.getItem("seconds"))} seconds ${JSON.parse(localStorage.getItem("count"))} clicks`

let count = 0
// let recordedCount = JSON.stringify(localStorage.setItem("count", "0"))
let seconds = 30
function increment(){
    display.textContent = seconds--
    if(seconds < 0){
        stop()
    }
    
}

function stop(){
    clearInterval(intervalID)
}

let intervalID 

increaseBtn.addEventListener("click", ()=> {
    if(!intervalID){
        intervalID = setInterval(increment, 1000)
    }   
    count++
    counter.textContent = count
    localStorage.setItem("count", count)
    localStorage.setItem("seconds", seconds)
    console.log(JSON.parse(localStorage.getItem("count")))
    
    if(count >= 150 && seconds > 0){
        resultInput.value = `${JSON.parse(localStorage.getItem("seconds"))} seconds ${JSON.parse(localStorage.getItem("count"))} clicks`
        disablebtns()
        stop()
    }   

  })

document.getElementById("restartBtn").addEventListener("click", ()=>{
    location.reload()
})

function disablebtns(){
    increaseBtn.disabled = true
    decreaseBtn.disabled = true
}











// function getTime(){
        //     var now = new Date();
        //     var hour = now.getHours();
        //     var min = now.getMinutes();
        //     var sec = now.getSeconds();

        //     display.textContent = `${hour}:${min}:${sec}`}

        // setInterval(getTime, 1000)


