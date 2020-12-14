const createCharacterInput = function() {
    const characterInfo = document.createElement("div")
    characterInfo.id = "character-info"

    let nameSection = document.createElement("div")
    nameSection.id = "character-name-box"
    let alignmentSection = document.createElement("div")
    alignmentSection.id = "character-alignment-box"
    let raceSection = document.createElement("div")
    raceSection.id = "character-race-box"
    let classSection = document.createElement("div")
    classSection.id = "character-class-box"
    characterInfo.appendChild(nameSection)
    characterInfo.appendChild(alignmentSection)
    characterInfo.appendChild(raceSection)
    characterInfo.appendChild(classSection)

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
    let chooseLawfulGood = document.createElement("option")
    chooseLawfulGood.value = "Lawful Good"
    chooseLawfulGood.innerText = "Lawful Good"
    let chooseChaoticGood = document.createElement("option")
    chooseChaoticGood.value = "Chaotic Good"
    chooseChaoticGood.innerText = "Chaotic Good"
    let chooseNeutralGood = document.createElement("option")
    chooseNeutralGood.value = "Neutral Good"
    chooseNeutralGood.innerText = "Neutral Good"
    let chooseChaoticNeutral = document.createElement("option")
    chooseChaoticNeutral.value = "Chaotic Neutral"
    chooseChaoticNeutral.innerText = "Chaotic Neutral"
    let chooseTrueNeutral = document.createElement("option")
    chooseTrueNeutral.value = "True Neutral"
    chooseTrueNeutral.innerText = "True Neutral"
    let chooseLawfulNeutral = document.createElement("option")
    chooseLawfulNeutral.value = "Lawful Neutral"
    chooseLawfulNeutral.innerText = "Lawful Neutral"
    let chooseChaoticEvil = document.createElement("option")
    chooseChaoticEvil.value = "Chaotic Evil"
    chooseChaoticEvil.innerText = "Chaotic Evil"
    let chooseNeutralEvil = document.createElement("option")
    chooseNeutralEvil.value = "Neutral Evil"
    chooseNeutralEvil.innerText = "Neutral Evil"
    let chooseLawfulEvil = document.createElement("option")
    chooseLawfulEvil.value = "Lawful Evil"
    chooseLawfulEvil.innerText = "Lawful Evil"
    alignmentSection.appendChild(addAlignmentLabel)
    alignmentSection.appendChild(addAlignmentSelect)
    addAlignmentSelect.appendChild(chooseAlignment)
    addAlignmentSelect.appendChild(chooseChaoticGood)
    addAlignmentSelect.appendChild(chooseNeutralGood)
    addAlignmentSelect.appendChild(chooseLawfulGood)
    addAlignmentSelect.appendChild(chooseChaoticNeutral)
    addAlignmentSelect.appendChild(chooseTrueNeutral)
    addAlignmentSelect.appendChild(chooseLawfulNeutral)
    addAlignmentSelect.appendChild(chooseChaoticEvil)
    addAlignmentSelect.appendChild(chooseNeutralEvil)
    addAlignmentSelect.appendChild(chooseLawfulEvil)

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
    let chooselightfoot = document.createElement("option")
    chooselightfoot.value = "- Lightfoot"
    chooselightfoot.innerText = "Halfling - Lightfoot"
    let choosestout = document.createElement("option")
    choosestout.value = "- Stout"
    choosestout.innerText = "Halfling - Stout"

    raceSection.appendChild(addSubRaceLabel)
    raceSection.appendChild(addSubRaceSelect)
    addSubRaceSelect.appendChild(chooseSubRace)
    addSubRaceSelect.appendChild(chooseNone)
    addSubRaceSelect.appendChild(chooseHillDwarf)
    addSubRaceSelect.appendChild(chooseHillDwarf)
    addSubRaceSelect.appendChild(chooseMountainDwarf)
    addSubRaceSelect.appendChild(chooseHighElf)
    addSubRaceSelect.appendChild(chooseWoodElf)
    addSubRaceSelect.appendChild(chooseDarkElf)
    addSubRaceSelect.appendChild(chooseForestGnome)
    addSubRaceSelect.appendChild(chooselightfoot)
    addSubRaceSelect.appendChild(choosestout)



    let addClassLabel = document.createElement("label");
    addClassLabel.for = "class-input";
    let addClassSelect = document.createElement("select")
    addClassSelect.id = "class-input"
    let chooseClass = document.createElement("option")
    chooseClass.value = ""
    chooseClass.disabled = true;
    chooseClass.selected = true;
    chooseClass.innerText = "Choose Class"
    let chooseBarbarian = document.createElement("option")
    chooseBarbarian.value = "Barbarian"
    chooseBarbarian.innerText = "Barbarian"
    let chooseBard = document.createElement("option")
    chooseBard.value = "Bard"
    chooseBard.innerText = "Bard"
    let chooseCleric = document.createElement("option")
    chooseCleric.value = "Cleric"
    chooseCleric.innerText = "Cleric"
    let chooseDruid = document.createElement("option")
    chooseDruid.value = "Druid"
    chooseDruid.innerText = "Druid"
    let chooseFighter = document.createElement("option")
    chooseFighter.value = "Fighter"
    chooseFighter.innerText = "Fighter"
    let chooseMonk = document.createElement("option")
    chooseMonk.value = "Monk"
    chooseMonk.innerText = "Monk"
    let choosePaladin = document.createElement("option")
    choosePaladin.value = "Paladin"
    choosePaladin.innerText = "Paladin"
    let chooseRanger = document.createElement("option")
    chooseRanger.value = "Ranger"
    chooseRanger.innerText = "Ranger"
    let chooseRogue = document.createElement("option")
    chooseRogue.value = "Rogue"
    chooseRogue.innerText = "Rogue"
    let chooseSorcerer = document.createElement("option")
    chooseSorcerer.value = "Sorcerer"
    chooseSorcerer.innerText = "Sorcerer"
    let chooseWarlock = document.createElement("option")
    chooseWarlock.value = "Warlock"
    chooseWarlock.innerText = "Warlock"
    let chooseWizard = document.createElement("option")
    chooseWizard.value = "Wizard"
    chooseWizard.innerText = "Wizard"

    classSection.appendChild(addClassLabel)
    classSection.appendChild(addClassSelect)
    addClassSelect.appendChild(chooseClass)
    addClassSelect.appendChild(chooseBarbarian)
    addClassSelect.appendChild(chooseBard)
    addClassSelect.appendChild(chooseCleric)
    addClassSelect.appendChild(chooseDruid)
    addClassSelect.appendChild(chooseFighter)
    addClassSelect.appendChild(chooseMonk)
    addClassSelect.appendChild(choosePaladin)
    addClassSelect.appendChild(chooseRanger)
    addClassSelect.appendChild(chooseRogue)
    addClassSelect.appendChild(chooseSorcerer)
    addClassSelect.appendChild(chooseWarlock)
    addClassSelect.appendChild(chooseWizard)

    return characterInfo;
}

let updateInputFromFields = function(character) {
    let button = document.getElementById("submit-character")
    let characterInfo = document.getElementById('character-info-outer')

    let nameSection = document.getElementById("character-name")
    let alignmentSection = document.getElementById("character-alignment")
    let raceSection = document.getElementById("character-race")


    let name = document.getElementById("name-input").value;
    let alignment = document.getElementById("alignment-input").value;
    let race = document.getElementById("race-input").value;
    let subRace = document.getElementById("sub-race-input").value;
    let cclass = document.getElementById("class-input")

    character.setName(name);
    character.setAlignment(alignment);
    character.setRace(race);
    character.setSubRace(subRace)
    character.setClass(cclass)

    nameSection.innerText = `Name: ${character.getName()}`;
    alignmentSection.innerText = `Alignment: ${character.getAlignment()}`;
    raceSection.innerText = `Race: ${character.getRace()} ${character.getSubRace()}`;
    classSection.innerText = `Class: ${character.getClass()}`
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