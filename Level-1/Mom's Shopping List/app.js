var form = document["my-form"]

var myList = document.getElementById("list-items")
myList.style.marginRight = "30px"

// ==============Add button below================

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const entry = form.input.value
    form.input.value = ""

    var NewListItem = document.createElement("li")
    NewListItem.textContent = entry
   
    myList.append(NewListItem)

    // ==============List buttons Below==============

    var editBtn = document.createElement("button")
        editBtn.textContent = "edit"
        editBtn.style.width = "40px"
        editBtn.style.height = "20px"
        editBtn.style.display = "flex"
        editBtn.style.flexDirection = "row"
        editBtn.style.marginRight = "20px"  
    NewListItem.append(editBtn)

    editBtn.addEventListener("click", (e) => {
    var editValue = e.target.parentElement.textContent
    e.target.parentElement.textContent = ""
    editBtn.style.display = 'none'
    
    const editInput = document.createElement('input')
    NewListItem.append(editInput)

    var saveBtn = document.createElement("button")
    saveBtn.textContent = "save"
    NewListItem.append(saveBtn)

    
    saveBtn.addEventListener("click", (e) => {
        editBtn.textContent = "edit"
        editValue = editInput.value
    
    var replace = document.createElement("span")
    var valueSwitch = editInput.value
    replace.textContent = valueSwitch
    NewListItem.append(replace)
    })
    
})


    
    
    
    
    var deleteBtn = document.createElement("button")
    deleteBtn.textContent ="X"
    deleteBtn.style.width = "25px"
    NewListItem.append(deleteBtn)
    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.textContent = ""
    })

})

