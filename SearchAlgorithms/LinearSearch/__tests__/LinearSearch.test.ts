import linearSearch from "../LinearSearch";

//Array with numbers 1-100
const arr = Array.from(Array(100 + 1).keys()).slice(1); //?

describe("Exponential Search", () => {
  it("Element found", () => {
    expect(linearSearch(arr, 1)).toBe(0);
    expect(linearSearch(arr, 50)).toBe(49);
    expect(linearSearch(arr, 100)).toBe(99);
  });

  it("Element not found", () => {
    expect(linearSearch(arr, -100)).toBe(-1);
    expect(linearSearch(arr, -50)).toBe(-1);
    expect(linearSearch(arr, -1)).toBe(-1);
  });

  it("Empty Array", () => {
    expect(linearSearch([], 10)).toBe(-1);
  });

  it("Negative Values", () => {
    expect(linearSearch([-100, -50, -1], -100)).toBe(0);
    expect(linearSearch([-100, -50, -1], -50)).toBe(1);
    expect(linearSearch([-100, -50, -1], -1)).toBe(2);
  });
});
