const determineAbilities = function(character) {
    let strengthScore = document.getElementById("strength-score")
    strengthScore.innerText = character.getStrength();
    let strengthAbility = document.getElementById("strength-modifier")
    let strengthMod = (character.getStrength() - 10) / 2;
    if (strengthMod % 1 == 0) {
        strengthAbility.innerText = strengthMod;
    } else {
        strengthAbility.innerText = strengthMod - 0.5;
    }

    let dexterityScore = document.getElementById("dexterity-score")
    dexterityScore.innerText = character.getDexterity();
    let dexterityAbility = document.getElementById("dexterity-modifier")
    let dexterityMod = (character.getDexterity() - 10) / 2;
    if (dexterityMod % 1 == 0) {
        dexterityAbility.innerText = dexterityMod;
    } else {
        dexterityAbility.innerText = dexterityMod - 0.5;
    }

    let constitutionScore = document.getElementById("constitution-score");
    constitutionScore.innerText = character.getConstitution();
    let constitutionAbility = document.getElementById("constitution-modifier");
    let constitutionMod = (character.getConstitution() - 10) / 2;
    if (constitutionMod % 1 == 0) {
        constitutionAbility.innerText = constitutionMod;
    } else {
        constitutionAbility.innerText = constitutionMod - 0.5;
    }


    let wisdomScore = document.getElementById("wisdom-score")
    wisdomScore.innerText = character.getWisdom();
    let wisdomAbility = document.getElementById("wisdom-modifier")
    let wisdomMod = (character.getWisdom() - 10) / 2;
    if (wisdomMod % 1 == 0) {
        wisdomAbility.innerText = wisdomMod;
    } else {
        wisdomAbility.innerText = wisdomMod - 0.5;
    }

    let intelligenceScore = document.getElementById("intelligence-score")
    intelligenceScore.innerText = character.getIntelligence();
    let intelligenceAbility = document.getElementById("intelligence-modifier")
    let intelligenceMod = (character.getIntelligence() - 10) / 2;
    if (intelligenceMod % 1 == 0) {
        intelligenceAbility.innerText = intelligenceMod;
    } else {
        intelligenceAbility.innerText = intelligenceMod - 0.5;
    }

    let charismaScore = document.getElementById("charisma-score");
    charismaScore.innerText = character.getCharisma();
    let charismaAbility = document.getElementById("charisma-modifier");
    let charismaMod = (character.getCharisma() - 10) / 2;
    if (charismaMod % 1 == 0) {
        charismaAbility.innerText = charismaMod;
    } else {
        charismaAbility.innerText = charismaMod - 0.5;
    }
}

export { determineAbilities }