const formOne = document["form-one"]
const addInput1 = document.getElementById("add-input1")
const addInput2 = document.getElementById("add-input2")
const formTwo = document["form-two"]
const subInput1 = document.getElementById("sub-input1")
const subInput2 = document.getElementById("sub-input2")
const formThree = document["form-three"]
const mulInput1 = document.getElementById("mul-input1")
const mulInput2 = document.getElementById("mul-input2")

function add(x,y) {
    return(Number(x) + Number(y))
    // why did I have to add "Number" above
}

formOne.addEventListener("submit", (e) =>{
    e.preventDefault()

    let entry1 = addInput1.value
    addInput1.value = ""
    let entry2 = addInput2.value
    addInput2.value = ""

    const addResultBox = document.createElement("p")
    addResultBox.style.height = "40px"
    addResultBox.style.color = "green"
    addResultBox.style.fontSize = "40px"
    addResultBox.style.textAlign = "center"
    addResultBox.textContent = add(entry1, entry2)
    formOne.append(addResultBox)
})
formTwo.addEventListener("submit", (e) =>{
    e.preventDefault()

    let entry1 = subInput1.value
    addInput1.value = ""
    let entry2 = subInput2.value
    addInput2.value = ""
    let result = entry1 - entry2

    const addResultBox = document.createElement("p")
    addResultBox.style.height = "40px"
    addResultBox.style.color = "green"
    addResultBox.style.fontSize = "40px"
    addResultBox.style.textAlign = "center"
    addResultBox.textContent = result
    formTwo.append(addResultBox)
})
formThree.addEventListener("submit", (e) =>{
    e.preventDefault()

    let entry1 = mulInput1.value
    addInput1.value = ""
    let entry2 = mulInput2.value
    addInput2.value = ""
    let result = entry1 * entry2

    const addResultBox = document.createElement("p")
    addResultBox.style.height = "40px"
    addResultBox.style.color = "green"
    addResultBox.style.fontSize = "40px"
    addResultBox.style.textAlign = "center"
    addResultBox.textContent = result
    formThree.append(addResultBox)
})






