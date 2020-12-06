class Character {

    constructor() {
        this._name = "x";
        this._alignment = "x";
        this._race = "x";
        this._subRace = "x"
        this._class = "x";
        this._subClass = "x"
        this._armorScore = 13;
        this._hitPoints = 8;
        this._battleHP = 5;
        this._level = 1;
        this._XP = 642;
        this._strengthScore = 10;
        this._dexterityScore = 12;
        this._constitutionScore = 14;
        this._wisdomScore = 15;
        this._intelligence = 18;
        this._charisma = 10;

        this._enemyName = "x";
        this._enemyArmor = 8;
        this._enemyHitPoints = 5;

    }



    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getAlignment() {
        return this._alignment;
    }
    setAlignment(alignment) {
        this._alignment = alignment;
    }
    getRace() {
        return this._race;
    }
    setRace(race) {
        this._race = race;
    }
    getSubRace() {
        return this._subRace;
    }
    setSubRace(subRace) {
        this._subRace = subRace;
    }
    getClass() {
        return this._class;
    }
    setClass(classs) {
        this._class = classs;
    }
    getSubClass() {
        return this._subClass;
    }
    setSubClass(subClass) {
        this._subClass = subClass;
    }
    getArmorScore() {
        return this._armorScore;
    }
    getHitPoints() {
        return this._hitPoints;
    }
    getBattleHP() {
        return this._battleHP
    }
    getLevelScore() {
        return this._level;
    }
    levelUp() {
        this._level++
    }
    getXPScore() {
        return this._XP;
    }
    getPointsUntilNextLevel() {
        let remainder = this._XP % 1000
        return 1000 - remainder;
    }


    getStrength() {
        return this._strengthScore;
    }
    getDexterity() {
        return this._dexterityScore;
    }
    getConstitution() {
        return this._constitutionScore;
    }
    getWisdom() {
        return this._wisdomScore;
    }
    getIntelligence() {
        return this._intelligence;
    }
    getCharisma() {
        return this._charisma;
    }


    dealDamage(damage) {
        this._enemyHitPoints -= damage;
    }
    takeDamage(damage) {
        this._battleHP -= damage;
    }
    successfulFight() {
        this._XP += 10;
    }



    getEnemyName() {
        return this._enemyName
    }
    setEnemyName(name) {
        this._enemyName = name
    }
    getEnemyHitPoints() {
        return this._enemyHitPoints
    }
    setEnemyHP(HP) {
        this._enemyHitPoints = HP
    }
    getEnemyArmor() {
        return this._enemyArmor
    }
    setEnemyArmor(armor) {
        this._enemyArmor = armor
    }


}

export { Character }