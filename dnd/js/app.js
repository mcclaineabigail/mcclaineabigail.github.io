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

let characterInfo = document.getElementById('character-info-outer')
characterInfo.appendChild(createCharacterInput());



let submitCharacterButton = document.getElementById("submit-character")
submitCharacterButton.addEventListener("click", () =>
    updateInputFromFields(character),
    updateStaticStats(character),
    determineAbilities(character)
);



let initiateBattleButton = document.getElementById("initiate-battle")
initiateBattleButton.addEventListener("click", () =>
    createBattleStats(character)
)

rollDice()