let underTest;

describe('EverQuest.', () => {
    beforeEach(() => {
        underTest = new Character;

    });

    describe('Iteration 1 - Core', () => {
        describe('Feature: Create a Character', () => {
            it('Name should be xxxxx', () => {
                expect(underTest._name).toBe("xxxxx");
            });
            it('Should be able to Set Name', () => {
                underTest.setName("Glenda");
                expect(underTest._name).toBe("Glenda")
            })
            it('Alignment Defaults to Good', () => {
                expect(underTest._alignment).toBe("xxxxx");
            })
            it('Should be able to set Alignment', () => {
                underTest.setAlignment("good")
                expect(underTest._alignment).toBe("good")
            })
            it('Armor Class defaults to 10', () => {
                expect(underTest._armorScore).toBe(10);
            })
            it('Hit Points default to 5', () => {
                expect(underTest._hitPoints).toBe(5);
            })
            it('Should be able to take damage', () => {
                underTest.takeDamage(2)
                expect(underTest._hitPoints()).toBe(8)
            })
            it('Should be able to attack', () => {
                underTest.dealDamage(2)
                expect(underTest._enemyHitPoints).toBe(3)
            })
            it('should be able to gain xp', () => {
                underTest.successfulFight()
                expect(underTest.getPointsScore()).toBe(10)
            })
        });

    }); // -> End Feature 1-1


}); //End Of Page