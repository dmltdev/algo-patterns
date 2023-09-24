import BoyerMooreVoting from "./BoyerMooreVoting";

describe("Boyer Moore's Majority Vote Algorithm", () => {
  it("Should correctly select the candidate with a single majority candidate", () => {
    const candidates = [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 6, 7];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(1);
  });

  it("Fails to find the candidate with most votes if the number of votes is less than N/2", () => {
    const candidates = [1, 1, 1, 2, 3, 4, 5];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(5);
  });

  it("Should correctly handle the majority candidate at the beginning of the array", () => {
    const candidates = [7, 2, 3, 4, 5, 5, 6, 1, 1, 1, 1, 1, 1, 1];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(1);
  });

  it("Should correctly handle the majority candidate at the end of the array", () => {
    const candidates = [1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(7);
  });

  it("Should correctly handle negative numbers as candidates", () => {
    const candidates = [-1, -1, 2, -1, 2, -1, 2, -1];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(-1);
  });

  it("Should handle an empty array", () => {
    const candidates = [];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(undefined);
  });

  it("Should handle an array with a single element", () => {
    const candidates = [42];
    expect(BoyerMooreVoting(candidates)).toStrictEqual(42);
  });
});
