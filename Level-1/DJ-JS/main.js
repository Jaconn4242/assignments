// ---container styling below---

var container = document.getElementById("container");
container.style.border = "2px solid black"
container.style.padding = "1em"
container.style.paddingTop = "2em"
container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(5, auto)"
container.style.gridTemplateRows = "100px"
container.style.textAlign = "center"
container.style.backgroundColor = "lightgrey"
container.style.gap = "30px"

// ---box styling below---

var header = document.getElementById("welcome-header")
header.style.gridColumn = "1 / -1"
header.style.justifyContent = "center"
header.style.backgroundColor = "black"
header.style.color = "yellow"
header.style.paddingTop = "10px"

var blueBox = document.getElementById("blue-box");
blueBox.style.border = "2px solid black"
blueBox.style.height = "100px"

var redBox = document.getElementById("red-box");
redBox.style.border = "2px solid black"

var yellowBox = document.getElementById("yellow-box");
yellowBox.style.border = "2px solid black"

var greenBox = document.getElementById("green-box");
greenBox.style.border = "2px solid black"

var orangeBox = document.getElementById("orange-box");
orangeBox.style.border = "2px solid black"

var scrollSentence = document.getElementById("scroll-sentence");
scrollSentence.style.textAlign = "center"
scrollSentence.style.marginTop = "30em"
scrollSentence.style.backgroundColor = "black"
scrollSentence.style.color = "white"
var instructions = document.getElementById("message")
instructions.style.textAlign = "center"
instructions.style.border = "2px solid yellow"
instructions.style.backgroundColor = "grey"
instructions.style.fontWeight = "bold"
// ---event listeners below---


blueBox.addEventListener("mouseenter", () => 
    blueBox.style.backgroundColor = "blue"
)
blueBox.addEventListener("mouseleave", () => 
    blueBox.style.backgroundColor = "lightgrey"
 )
 redBox.addEventListener("mousedown", () =>
    redBox.style.backgroundColor = "red"
 ) 
 redBox.addEventListener("mouseup", () =>
    redBox.style.backgroundColor = "lightgrey"
)
redBox.addEventListener("mouseenter", () =>
redBox.style.backgroundColor = "lightgrey"
)
yellowBox.addEventListener("mouseup", () =>
    yellowBox.style.backgroundColor = "yellow"
)
yellowBox.addEventListener("mouseenter", () => 
    yellowBox.style.backgroundColor = "lightgrey"
)
greenBox.addEventListener("dblclick", () =>
    greenBox.style.backgroundColor = "green"
)
greenBox.addEventListener("mouseenter", () =>
    greenBox.style.backgroundColor = "lightgrey"
)
orangeBox.addEventListener("mouseenter", () => 
    orangeBox.style.backgroundColor = "lightgrey"
)
window.addEventListener("scroll", () => 
    orangeBox.style.backgroundColor = "orange"
)
// ---keypress function below---

window.addEventListener("keydown", whatKey,);

function whatKey(key){
    if(key.keyCode == 66){
       blueBox.style.backgroundColor = "blue"
    } else if(key.keyCode == 82){
        redBox.style.backgroundColor = "red"
    } else if(key.keyCode == 89){
        yellowBox.style.backgroundColor = "yellow"
    } else if(key.keyCode == 71){
        greenBox.style.backgroundColor = "green"
    } else if(key.keyCode == 79){
        orangeBox.style.backgroundColor = "orange"
    } 
}


