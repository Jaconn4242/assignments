

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         let JSONData = xhr.responseText;
//         let data = JSON.parse(JSONData);
//         console.log(data.objects[0].pokemon)
//         showData(data.objects[0].pokemon)
//     }
// }

// function showData(arr){
//     arr.forEach(element => {
//         let h1 = document.createElement("h1");
//         h1.textContent = element.name
//         document.body.appendChild(h1)
//     })
//  }

// ==============See below on how to do it using a FOR loop==================

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        let JSONData = xhr.responseText;
        let data = JSON.parse(JSONData)
        showName(data.objects[0].pokemon)
    }
}

const showName = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let h1 = document.createElement("h1");
        h1.textContent = `${arr[i].name}` ;
        document.body.appendChild(h1)
    }
}






