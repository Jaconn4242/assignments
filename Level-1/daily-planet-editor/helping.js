var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (isThereKryptonite === false) {
        return "Superman beats " + enemyName + ", of course!";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    var isThereKryptonite;
    if (i % 2 === 0) {
        isThereKryptonite = true;
    } else {
        isThereKryptonite = false;
    }
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function isLouisLaneAttracted ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10) + 1);
}

console.log(isLouisLaneAttracted()) ;

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var boothQuickChange = Math.random();
    if (boothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}