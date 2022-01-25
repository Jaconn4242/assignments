var header = document.getElementById("header")
header.style.background = "black"
header.textContent = "Android Messages"
header.style.color = "white"
header.style.fontSize = "30px"
header.style.textAlign = "center"
header.style.margin = "25px"

var newParagraph = document.createElement("p")
header.append(newParagraph)
newParagraph.textContent = "John Smith "
newParagraph.style.fontSize = "20px"
newParagraph.style.color = "yellow"
newParagraph.style.padding = ".5em"

var phoneNumber = document.createElement("span")

newParagraph.append(phoneNumber)
phoneNumber.textContent = "(800) 867-5309"
phoneNumber.style.color = "white"
phoneNumber.style.border = "3px solid yellow"
phoneNumber.style.borderRadius = "1em"
phoneNumber.style.backgroundColor = "blue"
phoneNumber.style.padding = ".25em"

// var theme = document.getElementById("label");
// theme.style.marginLeft = "2em"
// theme.style.fontWeight = "bold"

var clear = document.getElementById("clear-button")
clear.textContent = "clear conversation"

var main = document.getElementById("main")
var messages = document.querySelector(".messages")
var text = document.querySelector(".message")

clear.addEventListener("click", () =>(
    messages.remove()
))






