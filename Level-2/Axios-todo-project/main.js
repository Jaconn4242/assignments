// GET request where the response is passed into createTodo()
const getData = ()=>{
    axios.get("https://api.vschool.io/Jeff/todo/")
        .then(res => createTodo(res.data))
        .catch(error => console.log(error))
}

// createTodo function 
const createTodo = (data) => {
// clearData() is called
    clearData()
// FOR loop that runs through the data array in the database
    for(let i = 0; i < data.length; i++){
// Creation of ordered list that displays each new objects title
    const ol = document.createElement("ol");
        ol.textContent = data[i].title;
        ol.setAttribute("class", "ordered-list")
        document.getElementById("todo-list").append(ol);
// Creation of check box
    const checkBox = document.createElement("input");
        checkBox.checked = data[i].completed
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "check-box")
        ol.prepend(checkBox)
// Event listener that if box is checked or unchecked reflects completed or not in database.
        checkBox.addEventListener("change", () =>{
            let completedID = data[i]._id
            if(checkBox.checked){
                ol.style.textDecoration = "line-through"
                let completed = {completed: true}
                axios.put(`https://api.vschool.io/Jeff/todo/${completedID}`, completed )
                .then(res => console.log(res.data))
                .catch(error => console.log(error)) 
            } else {
                ol.style.backgroundColor = "rgb(233, 154, 50)"
                ol.style.textDecoration = "none"
                let notCompleted = {completed: false}
                axios.put(`https://api.vschool.io/Jeff/todo/${completedID}`, notCompleted )
                .then(res => console.log(res.data))
                .catch(error => console.log(error)) 
            }
        });
        
// Creation of edit button 
    const editButton = document.createElement('button')
        editButton.textContent = "edit"
        editButton.setAttribute("class", "editButton")
        ol.append(editButton)
// edit button event listener
    editButton.addEventListener("click", () => {
        let objectID = data[i]._id
        let originalValue = data[i].title
// Creation of temporary Input to change title 
        const inputBox = document.createElement('input')
        inputBox.value = originalValue
        inputBox.setAttribute("class","Input-box")
        document.getElementById("todo-list").append(inputBox)
// Creation of temporary save button to save title changes
        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        saveButton.setAttribute("class","save-button")
        inputBox.append(saveButton)
// Upon edit button click, replace w/ new input and save button
        ol.replaceWith(inputBox, saveButton)
        
        saveButton.addEventListener("click", () => {
        // Line below inserts raw data and axios stringifys it
        // It could also be {let newInput = {title: inputBox.value}}
        // newInput is seen below as second argument in put request 
            let newInput = {title: inputBox.value}
            
            axios.put(`https://api.vschool.io/Jeff/todo/${objectID}`,newInput)
            .then(res => console.log(res))
            .catch(error => console.log(error))

            saveButton.remove()
            inputBox.remove()
            document.getElementById("todo-list").append(ol);
            ol.textContent = inputBox.value
            ol.append(editButton);
            ol.append(deleteButton);
            ol.prepend(checkBox)
            
        })
    })
// Creation of delete button 
    const deleteButton = document.createElement('button')
    deleteButton.textContent = "delete"
    deleteButton.setAttribute("class", "deleteButton")
    ol.appendChild(deleteButton)
// delete button grabs objects ID and deletes object in database
    deleteButton.addEventListener("click", ()=> {
         let test = data[i]._id

         axios.delete(`https://api.vschool.io/Jeff/todo/${test}`)
         .then(res => console.log(res))
         .catch(error => console.error(error))
         ol.remove()
        })
        
    }
}
// clear data() that resets database(called at FOR loop above)
const clearData = () => {
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

// STARTING POINT (GET request up top is initiated)
getData()


const myForm = document.myForm
// Form event listener that adds new object to database (back-end)
myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const newTodo = {
        title: myForm.new.value
    }

    myForm.new.value = ""

    axios.post("https://api.vschool.io/Jeff/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))

})


// for (const bit of data){
  
// }