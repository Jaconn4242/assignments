const readline = require("readline-sync")
// Below are the two opening questions of the game.
const userName = readline.question("Welcome to Colossal Adventure RPG! A game where you are given the chance to win prizes by defeating enemies as your walk through a deserted town. Please provide you name, then press enter ");
let instructions = readline.question("Hello " + userName + ", you have been provided with a free backpack! PRESS ENTER to continue");

// Below are the users properties/stats.
let user = {
    name: userName,
    hp: 50,
    damage: Math.floor(Math.random() * 8)
}
// Below is a collection of the 3 different enemies along with their properties/stats.
let enemies = [
    {
        name: "Headless Man",
        hp: 30,
        damage: Math.floor(Math.random() * 11)
    },
    {
        name: "Zombie Ex-girlfriend",
        hp: 20,
        damage: Math.floor(Math.random() * 10)
    },
    {
        name: "Rabid Dog",
        hp: 10,
        damage: Math.floor(Math.random() * 8)
    }
]

const weapons = [
    {
        name: "stick",
        damage: Math.floor(Math.random() * 4)
    },
    {
        name: "knife",
        damage: Math.floor(Math.random() * 5)
    },
    {
        name: "loaded pistol",
        damage: Math.floor(Math.random() * 7)
    },
]
// Below is an empty array for collection of users prizes during the game.
const inventory = []

// Below is a function that randomly selects an enemey. Use like this > randomEnemy().name
function randomEnemy (){
    let randomNum = Math.floor(Math.random() * 3)  
    let randomEnemy = enemies[randomNum]
        return randomEnemy
}
Intro()
function Intro(){
    let start = readline.keyIn("To start walking, press the W key")
        if(start === "w"){
            readline.keyIn("you find a large stick, you may be able to use this for defense. Lets put it in your backpack and keep walking") 
            // the line above doesn't prompt the user to do anything and anykey can be pressed to move forward
            inventory.push(weapons[0])
        } else {
            console.log("you have pressed an incorrect key, try again")
            Intro()
        }
}

// Below is the section they are brought back to after events happen, they are given the option to keep walking or quit.
let game = true;
while(game) {
    
    let command = readline.keyIn(["W to walk", "P to check backpack items", "E to exit game"])

    let keepGoing = true
    while(keepGoing){
        if(command === "w"){
            attackChance()
            let command = readline.keyIn("W\ to walk -  P\ to check backpack items -  E\ to Exit")
        } else if(command === "p"){
            console.log("Player: " + userName + ", hp: "+ user.hp +", Inventory: " + inventory.value)
            let command = readline.keyIn("W\ to walk -  P\ to check backpack items -  E\ to Exit")
            // when i took off .value for inventory it created an inphanent display.
        } else if(command === "e"){
            console.log("Have a great Day!")
            process.exit()
            // it keeps looping here if i press another key and how do i get b to work so they can see there stats?
            // also if the conditional statements above don't have a function after them do it start back over in the keepGoing while loop?
            // after given the backpack and pressing enter, if i press p, it 
            // how do i hide the users inputs? hideEchoBack = true???
        } else {
            console.log("wrong key pressed, try again")
            let command = readline.keyIn("W\ to walk -  P\ to check backpack items -  E\ to Exit")
            
    }
  }
}



// This is where the user has a 1/3 chance of encountering an enemy, if it's an enemy it's it is a random enemy out of the three
function attackChance (){
    let enemy = randomEnemy()
    let randomNumb = Math.floor(Math.random() * 3)

    if(randomNumb === 0){
           readline.keyInPause("It's a ghost town")
        } else if (randomNumb === 1){
            readline.keyInPause("You haven't found anything yet")
        } else if (randomNumb === 2){
            readline.keyInPause("You have been attacked by a " + enemy.name)
            theFight(enemy)
        } else {
            
        }
    }


 
// this is where the user enters into the fight or runs away, inflicts damage and shows results if they fight.
function theFight(enemy){
    while(user.hp > 0 && enemy.hp > 0 || user.hp <= 0){
        console.log("Enemy HP", enemy.hp)
        console.log("Your HP", user.hp)
        let fightOrRun = readline.keyIn("n\ 1. fight back n\ 2. run-away");
        if(fightOrRun === "1" ){
            readline.keyInPause("you strike the " + enemy.name)
            enemy.hp -= user.damage
            console.log("Enemy HP", enemy.hp)
            console.log("Your HP", user.hp)
                if(enemy.hp <= 0){
                    console.log(`you have defeated ${enemy.name} and you have acquired a knife!`)
                    readline.keyInPause("Great Job, lets keep walking!")
                    inventory.push(weapons[1])
                    attackChance()
                } else if(user.hp <= 0){
                    console.log("you have been defeated and " + enemy.name + " stole your backpack");
                    gameOver()
                } else  {
                    readline.keyInPause(enemy.name + " attacks back")
                    user.hp = user.hp - enemy.damage
                }    
        }if(fightOrRun === "2"){
            let randomNumber = Math.floor(Math.random() * 2)
            if(randomNumber === "1"){
                console.log("you managed to run away safely")
            } else {
                console.log("you were barely scratched on your way out!")
                user.hp = user.hp - enemy.damage
                console.log("Your HP", user.hp)
                
            }
        }

    }
}
    
    
function gameOver(){
    console.log("game over")
    process.exit()
}





    // readline.keyInYN(fifty())

    // function fifty(){
//     let fiftyPercent = [`The enemy has struck you as you ran away ${randomNum1 = Math.floor(Math.random() * 2)}` + process.exit(), process.exit()]
//     let randomNum1 = Math.floor(Math.random() * 2);
//     let randomChance = fiftyPercent[randomNum1];
    
//     if(randomChance = fiftyPercent[0]){
//         user.hp = enemies[0].damage - user.hp 
//         keepGoing = false
//         process.exit()
// user encounters the random enemy
// function meetEnemy(){
// readline.keyInPause("You have encountered a " + randomEnemy().name + "!")
//     runOrFight()
// }


// user is given the option to fight or Run away
// function runOrFight (){
    
//     options1 = ["Stay and Fight", "Run Away"]
//     chooseOption1 = readline.keyInSelect(options1, "What will you do?")
//     switch(options1[chooseOption1]) {
//         case "Stay and Fight": console.log("ok I'll put in a fight function") 
//         break
//         case "Run Away": console.log("May have dodged a bullet there, but we will never know.")
//         Intro()
//     }
// }



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
        



// function meetEnemy () {

//     randomEnemy().name 
//     if(randomEnemy().name === "Headless Man"){
//         console.log("A headless man is running straight towards you, what will you do?");
//     } else if(randomEnemy().name === "Zombie Ex-girlfriend"){
//         console.log("How could it be? what will you do? ")
//     } else if (randomEnemy().name === "Rabid Dog"){
//         console.log("This little guy doesn't look nice, what will you do?")
//     }
// }
