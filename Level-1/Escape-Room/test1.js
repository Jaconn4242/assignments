var readline = require("readline-sync");

let key = 0;
while(true){

startSection();

}
function startSection () {
    let userName = readline.question("Welcome! Who's playing today? ")
    if (readline.keyInYN("Hello " + userName + ", Do you want to enter the escape room? ")) {
        console.log("You have entered the escape room, press ENTER to continue")
    } else {
    console.log("Maybe next time, See you later!");
                process.exit()
    }              
    let choose = readline.question("So your inside this small room and you see a door, a desk, and a hole in the wall. Press ENTER to see your options:");
    let options = ["Put your hand in the hole and see whats in there", "look through the desk", "open on the door"],
    index = readline.keyInSelect(options);
    switch (options[index]) {
        case "Put your hand in the hole and see whats in there":
            console.log("you have been bitten by a deadly snake and unfortunately are no longer with us");
            tryAgain();
            break
        case "look through the desk":
            var foundKey = readline.question("you found the key! Select a number then press ENTER  \n 1) Unlock the door and go home \n 2) Check out whats in that hole in the wall before you go");
            if(foundKey === "1") {
                chickenDinner()
            } else {
                console.log("you have been bitten by a deadly snake and unfortunately are no longer with us");
                tryAgain()
            }
            break
        case "open on the door":
            console.log("it's locked...");
            startSection()
            break
        default:
            console.log("please enter the digit 1, 2, or 3, let's start over " + userName)
    }
}    
function tryAgain() {
    if(readline.keyInYN("Would you like to play again? ")) {
        startSection()
    } else {
        console.log("Thanks for playing, Goodbye!")
        process.exit()
    }
}
    function chickenDinner() {
        if (readline.keyInYN("Congratulations you've escaped! Play Again?")) {
        startSection();
    } else {
        console.log("Thanks for playing, Goodbye!");
        process.exit()
    }
}

    // switch (options[index]) {
            // case "Put your hand in the hole and see whats in there":
            //     console.log("You've been bitten by a deadly snake and have died instantly");
            //     restart()
            // break
            // case "look through the desk":
            //     console.log("you have found a key!")
            // break
            // case "knock on the locked door and call for help":
            //     console.log("Not going to get out that easy!")
            // default:
            //     console.log("i dont know whats going on")
    

