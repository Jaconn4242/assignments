const readline = require("readline-sync");
let key = 0;
while(true){

    mainMenu();
}
function mainMenu() {
    let choice = readline.question("What will you do?\n 1) Open the door \n 2) Find the key \n 3) Put hand in the hole");
    switch (choice) {
        case "1":
            if (key === 0) {
                console.log("It's locked...")
            } else if (key === 1) {
                victoryMenu();
            }
            break;
        case "2":
            console.log("You've acquired a key!")
            key = 1;
            break;
        case "3":
                defeatMenu();
            break;
        default:
            console.log("Please enter either '1', '2', or '3'")
            break;
    }
}