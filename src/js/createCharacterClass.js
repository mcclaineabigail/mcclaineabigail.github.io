const createCharacterInput = function() {
    const characterInfo = document.createElement("div")
    characterInfo.id = "character-info"

    let nameSection = document.createElement("div")
    nameSection.id = "character-name-box"
    let alignmentSection = document.createElement("div")
    alignmentSection.id = "character-alignment-box"
    let raceSection = document.createElement("div")
    raceSection.id = "character-race-box"
    characterInfo.appendChild(nameSection)
    characterInfo.appendChild(alignmentSection)
    characterInfo.appendChild(raceSection)

    let addNameLabel = document.createElement("label");
    addNameLabel.for = "name-input";
    let addNameInput = document.createElement("input");
    addNameInput.placeholder = "New Character Name"
    addNameInput.type = "text"
    addNameInput.name = "nameText"
    addNameInput.id = "name-input"
    nameSection.appendChild(addNameLabel)
    nameSection.appendChild(addNameInput)


    let addAlignmentLabel = document.createElement("label");
    addAlignmentLabel.for = "alignment-input";
    let addAlignmentSelect = document.createElement("select")
    addAlignmentSelect.id = "alignment-input"
    let chooseAlignment = document.createElement("option")
    chooseAlignment.value = ""
    chooseAlignment.disabled = true;
    chooseAlignment.selected = true;
    chooseAlignment.innerText = "Choose Alignment"
    let chooseGood = document.createElement("option")
    chooseGood.value = "Good"
    chooseGood.innerText = "Good"
    let chooseNeutral = document.createElement("option")
    chooseNeutral.value = "Neutral"
    chooseNeutral.innerText = "Neutral"
    let chooseEvil = document.createElement("option")
    chooseEvil.value = "Evil"
    chooseEvil.innerText = "Evil"
    alignmentSection.appendChild(addAlignmentLabel)
    alignmentSection.appendChild(addAlignmentSelect)
    addAlignmentSelect.appendChild(chooseAlignment)
    addAlignmentSelect.appendChild(chooseGood)
    addAlignmentSelect.appendChild(chooseNeutral)
    addAlignmentSelect.appendChild(chooseEvil)

    let addRaceLabel = document.createElement("label");
    addRaceLabel.for = "race-input";
    let addRaceSelect = document.createElement("select")
    addRaceSelect.id = "race-input"
    let chooseRace = document.createElement("option")
    chooseRace.value = ""
    chooseRace.disabled = true;
    chooseRace.selected = true;
    chooseRace.innerText = "Choose Race"
    let chooseHuman = document.createElement("option")
    chooseHuman.value = "Human"
    chooseHuman.innerText = "Human"
    let chooseElf = document.createElement("option")
    chooseElf.value = "Elf"
    chooseElf.innerText = "Elf"
    let chooseHalfElf = document.createElement("option")
    chooseHalfElf.value = "Half Elf"
    chooseHalfElf.innerText = "Half Elf"
    let chooseDwarf = document.createElement("option")
    chooseDwarf.value = "Dwarf"
    chooseDwarf.innerText = "Dwarf"
    let chooseHalfling = document.createElement("option")
    chooseHalfling.value = "Halfling"
    chooseHalfling.innerText = "Halfling"
    let chooseGnome = document.createElement("option")
    chooseGnome.value = "Gnome"
    chooseGnome.innerText = "Gnome"
    let chooseHalfOrc = document.createElement("option")
    chooseHalfOrc.value = "Half-Orc"
    chooseHalfOrc.innerText = "Half-Orc"
    let chooseTiefling = document.createElement("option")
    chooseTiefling.value = "Tiefling"
    chooseTiefling.innerText = "Tiefling"
    raceSection.appendChild(addRaceLabel)
    raceSection.appendChild(addRaceSelect)
    addRaceSelect.appendChild(chooseRace)
    addRaceSelect.appendChild(chooseHuman)
    addRaceSelect.appendChild(chooseElf)
    addRaceSelect.appendChild(chooseHalfElf)
    addRaceSelect.appendChild(chooseDwarf)
    addRaceSelect.appendChild(chooseHalfling)
    addRaceSelect.appendChild(chooseGnome)
    addRaceSelect.appendChild(chooseHalfOrc)
    addRaceSelect.appendChild(chooseTiefling)


    let addSubRaceLabel = document.createElement("label");
    addSubRaceLabel.for = "sub-race-input";
    let addSubRaceSelect = document.createElement("select")
    addSubRaceSelect.id = "sub-race-input"
    let chooseSubRace = document.createElement("option")
    chooseSubRace.value = ""
    chooseSubRace.disabled = true;
    chooseSubRace.selected = true;
    chooseSubRace.innerText = "Choose Sub-Race"

    let chooseNone = document.createElement("option")
    chooseNone.value = ""
    chooseNone.innerText = "None"
    let chooseHillDwarf = document.createElement("option")
    chooseHillDwarf.value = "- Hill Dwarf"
    chooseHillDwarf.innerText = "Dwarf - Hill Dwarf"
    let chooseMountainDwarf = document.createElement("option")
    chooseMountainDwarf.value = "- Mountain Dwarf"
    chooseMountainDwarf.innerText = "Dwarf - Mountain Dwarf"
    let chooseHighElf = document.createElement("option")
    chooseHighElf.value = "- High Elf"
    chooseHighElf.innerText = "Elf/Half-Elf - High Elf"
    let chooseWoodElf = document.createElement("option")
    chooseWoodElf.value = "- Wood Elf"
    chooseWoodElf.innerText = "Elf/Half-Elf - Wood Elf"
    let chooseDarkElf = document.createElement("option")
    chooseDarkElf.value = "- Dark Elf"
    chooseDarkElf.innerText = "Elf/Half-Elf - Dark Elf"
    let chooseForestGnome = document.createElement("option")
    chooseForestGnome.value = "- Forest Gnome"
    chooseForestGnome.innerText = "Gnome - Forest Gnome"




    raceSection.appendChild(addSubRaceLabel)
    raceSection.appendChild(addSubRaceSelect)
    addSubRaceSelect.appendChild(chooseNone)
    addSubRaceSelect.appendChild(chooseHillDwarf)
    addSubRaceSelect.appendChild(chooseHillDwarf)
    addSubRaceSelect.appendChild(chooseMountainDwarf)
    addSubRaceSelect.appendChild(chooseHighElf)
    addSubRaceSelect.appendChild(chooseWoodElf)
    addSubRaceSelect.appendChild(chooseDarkElf)
    addSubRaceSelect.appendChild(chooseForestGnome)



    return characterInfo;
}

const updateInputFromFields = function(character) {
    let button = document.getElementById("submit-character")
    let characterInfo = document.getElementById('character-info-outer')

    let nameSection = document.getElementById("character-name")
    let alignmentSection = document.getElementById("character-alignment")
    let raceSection = document.getElementById("character-race")
    let subRaceSection = document.getElementById("character-sub-race")

    let name = document.getElementById("name-input").value;
    let alignment = document.getElementById("alignment-input").value;
    let race = document.getElementById("race-input").value;
    let subRace = document.getElementById("sub-race-input").value;

    character.setName(name);
    character.setAlignment(alignment);
    character.setRace(race);
    character.setSubRace(subRace)

    nameSection.innerText = `Character Name: ${character.getName()}`;
    alignmentSection.innerText = `Character Alignment: ${character.getAlignment()}`;
    raceSection.innerText = `Character Race: ${character.getRace()} ${character.getSubRace()}`;
    characterInfo.removeChild(characterInfo.lastChild);
    button.remove();

    let heroName = document.getElementById("hero-name")
    heroName.innerText = character.getName();

}

let updateStaticStats = function(character) {
    let hitPoints = document.getElementById("hit-points")
    hitPoints.innerText = `Hit Points: ${character.getHitPoints()}`;

    let armorScore = document.getElementById("armor-score")
    armorScore.innerText = `Armor Score: ${character.getArmorScore()}`;

    let levelScore = document.getElementById("level-score")
    levelScore.innerText = `Character Level: ${character.getLevelScore()}`



    let levelUp = document.getElementById("level-up")
    if (character.getPointsUntilNextLevel() == 0) {
        levelScore.innerText = "Points Until Next Level: 1000"
        character.levelUp()
    }
    levelUp.innerText = `Points Until Next Level: ${character.getPointsUntilNextLevel()}`

}

const clearChildren = function(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

export { createCharacterInput }
export { updateInputFromFields }
export { updateStaticStats }