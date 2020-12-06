import {
    Character
} from "/js/character.js ";

let enemyName = document.getElementById("enemy-name")
let enemyHP = document.getElementById("enemy-hit-points")
let heroHitPoints = document.getElementById("hero-hit-points")

let updateDamageDealt = function(character) {
    let damageDealt = document.getElementById("character-attack").value
    character.dealDamage(damageDealt)
    enemyHP.innerText = `Enemy Hit Points: ${character.getEnemyHitPoints()}`
}
let updateDamageTaken = function(character) {
    let damageTaken = document.getElementById("character-damaged").value
    character.takeDamage(damageTaken)
    heroHitPoints.innerText = `Hit Points: ${character.getBattleHP()}`
}

let createBattleStats = function(character) {

    heroHitPoints.innerText = `Hit Points: ${character.getBattleHP()}`
    let heroArmor = document.getElementById("hero-armor")
    heroArmor.innerText = `Armor Score: ${character.getArmorScore()}`

    let enemyNameInput = document.createElement("input")
    enemyNameInput.type = "text"
    enemyNameInput.id = "enemy-name-input"
    enemyNameInput.placeholder = "Enemy Name/Type"

    let enemyHPInput = document.createElement("input")
    enemyHPInput.type = "text"
    enemyHPInput.id = "enemy-HP-input"
    enemyHPInput.placeholder = "Enemy Hit Points"

    let enemyArmorInput = document.createElement("input")
    enemyArmorInput.type = "text"
    enemyArmorInput.id = "enemy-armor-input"
    enemyArmorInput.placeholder = "Enemy Armor Score"

    let enemyInputButton = document.createElement("button")
    enemyInputButton.id = "enemy-input-button"
    enemyInputButton.innerText = "Submit Foe"

    enemyName.appendChild(enemyNameInput)
    enemyName.appendChild(enemyHPInput)
    enemyName.appendChild(enemyArmorInput)
    enemyName.appendChild(enemyInputButton)

    enemyInputButton.addEventListener("click", () =>
        updateFoeFromInputs(character)
    )

    let dealDamageButton = document.getElementById("deal-damage")
    dealDamageButton.addEventListener("click", () =>
        updateDamageDealt(character)
    )

    let takeDamageButton = document.getElementById("take-damage")
    takeDamageButton.addEventListener("click", () =>
        updateDamageTaken(character)
    )
}



let updateFoeFromInputs = function(character) {
    let enemyNameInput = document.getElementById("enemy-name-input").value
    character.setEnemyName(enemyNameInput)
    let enemyHPInput = document.getElementById("enemy-HP-input").value
    character.setEnemyHP(enemyHPInput)
    let enemyArmorInput = document.getElementById("enemy-armor-input").value
    character.setEnemyArmor(enemyArmorInput)
    clearChildren(enemyName)

    let enemyArmor = document.getElementById("enemy-armor")
    enemyArmor.innerText = `Enemy Armor: ${character.getEnemyArmor()}`
    document.getElementById("enemy-name").innerText = character.getEnemyName()
    document.getElementById("enemy-hit-points").innerText = `Enemy Hit Points: ${character.getEnemyHitPoints()}`
    document.getElementById("enemy-armor").innerText = `Enemy Armor: ${character.getEnemyArmor()}`
}

const clearChildren = function(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}



export { createBattleStats }
export { updateFoeFromInputs }