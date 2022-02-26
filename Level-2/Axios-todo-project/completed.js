const retrieveData = () => {
    axios.get("https://api.vschool.io/Jeff/todo/")
        .then(res => listData(res.data))
        .catch(error => console.log(error))
}
const listData = (data) => {
    for(let i = 0; i < data.length; i++){
        let newListItem = document.createElement("li")
        newListItem.setAttribute("class", "individual-list-item")
        let completed = data[i].completed
        if(completed){
            newListItem.textContent = data[i].title
            document.getElementById("completed-items").append(newListItem)
        }
    }
}

retrieveData()