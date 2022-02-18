


class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = 0;
        this.status = "Big"
        this.hasStar = false
    }
    
    setName (namePicked){
        this.name = namePicked
    }
    
    gotHit (){
        if(this.status === "Small"){
            this.status = "Dead";
            console.log(`${this.name} You ran into a Bob-omb for the last time \nThanks for playing!`);
            clearInterval(gameStart)
        } if(this.status === "Big"){
            this.status = "Small";
            console.log("you've been hit by a cheep cheep!")
        } if(this.status === "Powered Up"){
            this.status = "Big";
            console.log("you ran into a Goomba!")
        } if(this.status === "Powered Up" && this.hasStar){
            console.log("A turtle ran into you but your star has protected you!")
            this.status === "Powered Up";
            this.hasStar = false;
        } 
    }
    
    gotPowerUp (){
        if(this.status === "Small"){
            this.status = "Big";
            
        } if(this.status === "Big"){
            this.status = "Powered Up";
            
        } if(this.status === "Powered Up"){
            console.log("Congratualtions! You got a star!  ")
            this.hasStar = true;
        }
    }
    
    addCoin (){
        console.log("You recieved a coin!")
        this.totalCoins++
    }
    
    print (){
        console.log(`Name: ${this.name}`);
        console.log(`Status: ${this.status}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Star: ${this.hasStar} \n`)
        
    }
    
}


const newPlayer = new Player()
newPlayer.setName("Mario")










const gameStart = setInterval(() => {

    newPlayer.print()

    let randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber === 0){
        newPlayer.gotHit();
    } if(randomNumber === 1){
        newPlayer.gotPowerUp();
    } if (randomNumber === 2){
        newPlayer.addCoin();
    }
    
}, 3000)



















// const readline = require("readline-sync")
// const options = ["Mario", "Luigi"]
// const openingQuestion = readline.keyInSelect(options, "Please select your player");
// switch(options[openingQuestion]){
//     case "Mario":
//         playername = "Mario";
//         break;
//     case "Luigi":
//         playername = "Luigi";
//         break;
