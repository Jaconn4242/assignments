var myForm = document["my-form"];
var listItemHeader = document.getElementsByClassName("list-item-header");
var listItems = document.getElementById("list-items")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()

   var entry = myForm.input.value
   myForm.input.value = ""

   var newListItem = document.createElement("li")
   newListItem.textContent = entry
   newListItem.style.display = "flex"
   newListItem.style.flexDirection = "row"
   listItems.append(newListItem)

   var editBtn = document.createElement("button")
   editBtn.textContent = "edit"
   newListItem.append(editBtn) 

   var deleteBtn = document.createElement("button")
   deleteBtn.textContent = "delete"
   newListItem.append(deleteBtn)
//    delete button event listener below
    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.textContent = ""
    })  

    // below is "once the edit button is clicked, it creates
    // a new input and a new button(saveBtn) 
    editBtn.addEventListener("click", (e) => {
        var newInput = document.createElement("input") 
        // newInput.placeholder = newListItem.textContent HOW DO IT PUT A PLACEHOLDER IN HERE
        e.target.parentElement.textContent = newInput.value
        newListItem.append(newInput)

        var saveBtn = document.createElement("button")
        saveBtn.textContent = "save"
        newListItem.append(saveBtn)

        
        
// once the save button is clicked it just starts all over
// need to figure out how to loop it
        saveBtn.addEventListener("click", (e) => {
           var savedInput = newInput.value
           newInput.value = ""
           var newNew = document.createElement("li")
           newNew.textContent = savedInput
           newListItem.append(newNew)
           newInput.style.display = "none"
           saveBtn.style.display = "none"
           newNew.append(editBtn)
           newNew.append(deleteBtn)
        })
    })  
})


   
