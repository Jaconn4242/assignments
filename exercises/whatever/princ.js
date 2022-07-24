class Player {
    constructor(name = "", status = "Small", totalCoins, hasStar, gameActive = true) {
        this.name = name;
        this.status = status;
        this.totalCoins = totalCoins;
        this.gameActive = gameActive;
        this.hasStar = hasStar;
    }

    /* set which player is playing */
    setName(namePicked) {
        console.log(`Name Picked: ${namePicked}`)
        this.name = namePicked;
    }

    /* Take Damage- gotHit */
    gotHit() {
        if (this.hasStar) {
            console.log("You used your Star power!");
            this.hasStar = false;
        } else {
            this.status = (this.status === "PowerUp") ? "Big" :
                (this.status === "Big") ? "Small" : this.endGame();
        }
    }

    /* power up player */
    gotPowerUp() {
        if (this.status === "PowerUp") this.hasStar = true;
        else if (this.status === "Big") this.status = "PowerUp";
        else this.status = "Big";
    }
    /* add coin to current coin count */
    addCoin() {
        this.totalCoins++
    }

    /* Print the player */
    print() {
        console.log(`\n Name: ${this.name} \n Status: ${this.status} \n Coins: ${this.totalCoins} \n StarPower: ${this.hasStar}`);
    }

    /* stop the player Class from running */
    endGame() {
        this.gameActive = false;
        console.log(`\n ${this.name} Died, \n Game Over `);
        clearInterval(runTime);
    }
}


let player = new Player(0, "Big", false);
player.setName("Mario");
// player.setName("Luigi");


let runTime = setInterval(() => {
    player.print();
    let randomEvent = Math.floor((Math.random() * 3));
    console.log(`Random Event(s): ${randomEvent}`)
    if (randomEvent === 0) {
        player.gotHit();
    } else if (randomEvent === 1) {
        player.gotPowerUp();
    } else player.addCoin();
}, 1000);












const removeOutOfStock = (arr) => {
    let result = arr.filter(product => {
        if(product.data.products > 0){
            product.data.products.map(inStock => {
                return
            }) 
        } 
    })
    return result
}

for(let i = 0; i < widget.products; i++){
    let deleted = widget.products[i].variants
    if(widget.products[i].selected_variant.inventory_quantity === 0){
        
    }
}   

// Orthofeet
setTimeout(() => {
    const infoElements = document.querySelectorAll("#rebuy-widget-41497 .rebuy-product-info")
    infoElements.forEach((item) => {
        const customText = document.createElement("div")
        customText.textContent = "Choose Size:"
        customText.style.marginTop = "15px"
        item.appendChild(customText)
    })
    const quantityText = document.querySelectorAll("#rebuy-widget-41497 .rebuy-product-info .rebuy-product-price .rebuy-money.compare-at")
    quantityText.forEach((item) => {
        const threePair = document.createElement("span")
        threePair.textContent = "(3-Pair)"
        threePair.classList.add("pair-quantity")
        threePair.style.textDecoration = "none "
        item.append(threePair)
    })
    
}, 100)

//Ortho - widget styling 41497
#rebuy-widget-41497 .rebuy-color-label {
    display: none;
    }
    
    #rebuy-widget-41497 .rebuy-size-label {
    border-radius: 5px;
    }
    #rebuy-widget-41497 .rebuy-button {
    width: 64% !important;
    }
    #rebuy-widget-41497 .rebuy-size-input:checked+.rebuy-size-label {
        background-color: #4C9685;
        color: white;
    }
    #rebuy-widget-41497 .rebuy-size-label:hover{
        background-color: #4C9685;
        color: white;
        transition: .5s;
        transition-timing-function: ease-in-out;
        cursor: pointer;
    }
// Corliving
setTimeout(() => {
    document.addEventListener('rebuy:cart.change', function(event){
        event.detail.cart.enrichCart();
      });
},100)