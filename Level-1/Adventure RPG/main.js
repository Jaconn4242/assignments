const readline = require("readline-sync")

const userName = readline.question("Welcome to Colossal Adventure RPG! A game where you are given the chance to win prizes by defeating enemies as your walk through a deserted town. Please provide you name, then press enter ");
let instructions = readline.keyInPause("Hello " + userName + ", Lets begin!");



const user = {
    name: userName,
    hp: 50,
    damage: Math.floor(Math.random() *5)
}

const enemies = [
    {
        name: "Headless Man",
        hp: 30,
        damage: Math.floor(Math.random() * 3)
    },
    {
        name: "Zombie Ex-girlfriend",
        hp: 20,
        damage: Math.floor(Math.random() * 4)
    },
    {
        name: "Rabid Dog",
        hp: 10,
        damage: Math.floor(Math.random() * 5)
    }
]
// This function randomly selects an enemey.
function randomEnemy (){
    let randomNum = Math.floor(Math.random() * 4)  
    let randomEnemy = enemies[randomNum]
        return randomEnemy
}

Intro() 
function Intro(){
    let game = true;
    while(game){
        let choose = readline.question("View your list of options by pressing enter")
        let options = ["Start Walking", "Exit the game"] 
        let walkOrExit = readline.keyInSelect(options)
            if(options[walkOrExit] === "Start Walking"){
                meetEnemy()
            }   else {
                console.log("Have a great day!")
                process.exit()
            }
    }
}


// function Intro () {
//     let game = true
//     let enemies
//     while(game){
//         if(readline.question("Lets start walking " + userName + ", to start walking press the W key or press E to exit game")){
//             console.log("You're walking through the deserted town and OH Wow! a ",randomEnemy().name, "starts attacking you n\ 1. fight back n\ 2. run away")
//         } else {
//             console.log("Thanks for playing!")
//             process.exit()
//         }
//     }
// }
// function randomEnemy (){
    //     let randomEnemy = new Array()
//     for(i = 0; i < enemies.length; i++){
//          randomEnemy.push([Math.floor(Math.random) * enemies.length])
//     }
//         return randomEnemy
// }
        
        
meetEnemy()
function meetEnemy () {
    if(enemies.name === "Headless Man"){
        console.log("A headless man is running straight towards you, what will you do?");
    } else if(enemies.name === "Zombie Ex-girlfriend"){
        console.log("How could it be? what will you do? ")
    } else if (enemies.name === "Rabid Dog"){
        console.log("This little guy doesn't look nice, what will you do?")
    }
}
