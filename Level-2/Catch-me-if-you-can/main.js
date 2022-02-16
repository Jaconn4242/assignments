
// function sum(x, y){
//     if ((isNaN(x)) || (isNaN(y))){
//         throw new Error("Seems that one of the arguments is not a number")
//     }
//     return x + y
//   }

// try{
//    console.log(sum(1,2))
// }

// catch(err){
//     console.log(err)
// }

// finally{
//     console.log("This is the end, but always runs")
// }

const user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username != "sam" || password != "123abc"){
        throw new Error("The username or password is incorrect, please check your entry and try again")
    } else {
        return "login successful!"
    }
}

try{
    console.log(login("sam", "123abc"))
}
catch(err) {
    console.log(err)
}
finally{
    console.log("it worked")
}

