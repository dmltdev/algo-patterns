import twoCrystallBalls from "./TwoCrystalBalls";
describe("Two Crystall Balls Problem", () => {
    it('should return -1 when there are no breaks', () => {
        const breaks = [false, false, false, false, false];
        expect(twoCrystallBalls(breaks)).toBe(-1);
    });
    it('should find the first breaks in the first half', () => {
        const breaks = [true, true, true, true, true];
        expect(twoCrystallBalls(breaks)).toBe(0);
    });
    it('should find the first break in the second half ', () => {
        const breaks = [false, false, false, false, true, true];
        expect(twoCrystallBalls(breaks)).toBe(5);
    });
});
