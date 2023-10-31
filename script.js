// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100;

function onReady() {
    console.log("Ready to go!")
        // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    
    function attack(apCost, damage) {
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
      
      function update() {
        const apText = document.querySelector(".ap-text")
        const hpText = document.querySelector(".hp-text")
        apText.textContent = `${playerAP} AP`
        hpText.textContent = `${fungusHP} HP`
      
        const fungus = document.querySelector(".freaky-fungus")
        if (fungusHP <= 0) {
          fungus.classList.remove("walk")
          fungus.classList.add("dead")
        }
        if (playerAP <= 0) {
          fungus.classList.remove("walk")
          fungus.classList.add("jump")
          for (const button of document.querySelectorAll(".attack-btn")) {
            console.log(button)
            button.setAttribute("disabled", "")
          }
        }
      }
      
      function arcane() {
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

}


onReady()