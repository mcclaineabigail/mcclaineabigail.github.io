import {
    Character
} from "/js/character.js ";

import {
    createCharacterInput,
    updateInputFromFields,
    updateStaticStats
} from "/js/createCharacterClass.js";

import {
    rollDice
} from "/js/dice.js";

import {
    determineAbilities
} from "/js/abilities.js";

import {
    createBattleStats,
} from "/js/battle.js";

let character = new Character

document.getElementById("abilities").style.visibility = "hidden"

let characterInfo = document.getElementById('character-info-outer')
characterInfo.appendChild(createCharacterInput());



let submitCharacterButton = document.getElementById("submit-character")
submitCharacterButton.addEventListener("click", () =>
    updateInputFromFields(character),
    updateStaticStats(character),
    determineAbilities(character)
);

submitCharacterButton.onclick = function() {
    document.getElementById("abilities").style.visibility = "visable"
    console.log("hello")
}



let initiateBattleButton = document.getElementById("initiate-battle")
initiateBattleButton.addEventListener("click", () =>
    createBattleStats(character)
)

rollDice()