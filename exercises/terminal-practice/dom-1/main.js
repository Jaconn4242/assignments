var form = document.getElementById("log-form")
var inputBox = document.getElementById("something")
inputBox.placeholder = "Please enter a value"
var myList = document.getElementById("my-list")
myList.style.textAlign = "center"
myList.style.lineHeight = "2em"




form.addEventListener("submit", (e) => {
    e.preventDefault()

    var entry = inputBox.value
    inputBox.value = ""

    var newElement = document.createElement("div")
    newElement.textContent = entry
    newElement.style.border = "2px solid black"
    myList.append(newElement)
    var editBtn = document.createElement("button")
    editBtn.textContent = "edit"
    myList.append(editBtn)
    var deleteBtn = document.createElement("button")
    deleteBtn.textContent = "delete"
    myList.append(deleteBtn)

    editBtn.addEventListener("click", () => {
        newElement.value = entry
        deleteBtn.style.display = "none"
        editBtn.style.display = "none"
        var saveBtn = document.createElement("button")
        saveBtn.textContent = "save"
        saveBtn.style.background = "lightgreen"
        myList.append(saveBtn)
        var small = document.createElement("small")
        small.style.color = "red"
        small.textContent = "editing"
        myList.appendChild(small)
        
        saveBtn.addEventListener("click", () => {
            var newEdit = newElement.value
            saveBtn.style.display = "none"
            small.style.display= "none"
            newElement.style.display = "none"
            var editedValue = document.createElement("li")
            editedValue.textContent = newEdit
            myList.append(editedValue)
            myList.append(editBtn)
            myList.append(deleteBtn)
        }) 
        
        deleteBtn.addEventListener("clicked", (e) => {
            document.body.style.backgroundColor = "red"
            console.log(deleteBtn)
        })
    })
})


