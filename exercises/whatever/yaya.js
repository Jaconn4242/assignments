const todoList = document.getElementById('scroll');

axios.get("https://api.vschool.io/kyle/todo")
    .then(response =>  {
        for(let i = 0; i < response.data.length; i++){
            birthTodo(response.data[i])
            console.log(response.data[i])
        }

        function birthTodo(todo){
            console.log(`hopefully this ${todo} is showing`)
            // create/select the element
            const acheOne = document.createElement('h1')
            const divv = document.createElement("div")
            const myDel = document.createElement('button')
            const imgD = document.createElement('img');
            const titleInfo = todo.title
            const priceInfo = todo.price
            const isCompleted = todo.completed;
            const desInfo = todo.description
            // edit element
            acheOne.textContent = `TITLE:  ${titleInfo} PRICE: ${priceInfo} DESCRIPTION: ${desInfo}`
            acheOne.setAttribute('class', 'acheOne')
            myDel.setAttribute('class', 'delButt')
            myDel.textContent = "Erase me UwU"
            // append
            todoList.appendChild(divv)
            divv.appendChild(acheOne)
            divv.appendChild(myDel)
    
            myDel.addEventListener("click", (e)=>{
                console.dir(e.target)
                parent.removeChild()
            })

            if(isCompleted === true) {
                acheOne.style.textDecoration = 'line-through';
                // console.log(`${fish} is true!`);
            } 
            if(todo.imgUrl){
                // console.log('does have image')
                imgD.setAttribute('class', 'imgJSON')
                imgD.setAttribute('src', todo.imgUrl)
        
                myDel.setAttribute('class', 'delButt')
                myDel.textContent = 'Erase Me UwU'
                acheOne.appendChild(imgD)
            } else {
                // console.log('does not have image')
                imgD.setAttribute('class', 'imgJSON');
                imgD.setAttribute('src', 'https://thumbs.dreamstime.com/z/nope-concept-vintage-wooden-letterpress-type-word-written-wood-rustic-background-178547404.jpg')
                acheOne.appendChild(imgD);
            }
        }
    })
    .catch(error => console.log(error))

const todoForm = document.todoForm

todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const addNew = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        price: todoForm.price
    }
    axios.post("https://api.vschool.io/kyle/todo/", addNew)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})









