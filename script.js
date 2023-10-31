// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100
let playerAP = 100

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file!
    // There are lots of buttons and things ready for you to hook into here!

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function attack(apCost, damage) { // <--Creating attack funciton & assigning apCost/damage
    playerAP -= apCost
    fungusHP -= damage
    if (playerAP < 0) { 
        playerAP = 0
    }
    if (fungusHP < 0) {
        fungusHP = 0
    }
    console.log(`Player AP: ${playerAP}, Fungus HP: ${fungusHP}`)

    update()
}

function update() { //<--This function updating the text of the AP HP
    const apText = document.querySelector(".ap-text") // <-- calling to CSS
    const hpText = document.querySelector(".hp-text")
    apText.textContent = `${playerAP} AP` //<--Pulling the 100AP from HTML
    hpText.textContent = `${fungusHP} HP` //<--Pulling the 100HP from HTML

    const fungus = document.querySelector(".freaky-fungus") // <-- calling to CSS
    if (fungusHP <= 0) {
        fungus.classList.remove("walk") // <-- calling to CSS
        fungus.classList.add("dead") // <-- calling to CSS
    }
    if (playerAP <= 0) { //< if statement telling us that if the player
                        //  AP is less than or equal to 0 walk is removed and replaced with jump
        fungus.classList.remove("walk")
        fungus.classList.add("jump")
        // for loop withinn the if statement letting us know that attack buttons are disable when player ap <0
        for (const button of document.querySelectorAll(".attack-btn")) {
            console.log(button)
            button.setAttribute("disabled", "")
        }
    }
}

function arcaneScepter() { //< --Attack type & calling to the "attack" function
    attack(12, 14)
}

function entangle() {
    attack(23, 9)
}

function dragonBlade() {
    attack(38, 47)
}

function starFire() {
    attack(33, 25)
}

onReady()