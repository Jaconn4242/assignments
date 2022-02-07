const readline = require("readline-sync")

const userName = readline.question("what is your name? ")
if(readline.keyInYN(userName + " is your name????")){
    readline.keyInPause("Alright, " +userName+ "! let's play Find My Dog")
    walk()
} else {
    console.log("You pressed the wrong key! try again")
}

    function walk(){

        var options = readline.keyInSelect(["Look in the neighbors back yard, there's usually another dog back there", "Call your mom", "Ask the man walking down the street"])
        if( options === "1"){
            chanceOfDogAttack()
        } else if(options === "2"){
            callToMom()
        }  else if(options === "3") {
            chanceOfManAttack()
        }
    }


    function chanceOfDogAttack (){
        randomNumb = Math.floor(Math.random() * 3)
            if(randomNumb === 0){
                readline.keyInPause("Looks like there is no sign of dogs in the backyard")
                walk()
            } else if(randomNumb === 1){
                readline.keyInPause("Maybe check other surrounding backyards")
                checkOther()
            } else {
                readline.keyInPause("you see my dog but the other dog starts attacking you!")
            }
    }

    function chanceOfManAttack(){
        console.log("this is where I need to put 3 options randomized")
    }
    function checkOther(){
        console.log("this is where I need to put 3 check other backyard options")
    }


