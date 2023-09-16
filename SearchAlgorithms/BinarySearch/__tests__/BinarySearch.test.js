import binarySearch from "../BinarySearch";
//Array with numbers 1-100
const arr = Array.from(Array(100 + 1).keys()).slice(1); //?
describe("Binary Search", () => {
    it("Element is found", () => {
        expect(binarySearch(arr, 1)).toBe(0);
        expect(binarySearch(arr, 50)).toBe(49);
        expect(binarySearch(arr, 100)).toBe(99);
    });
    it("Element is not found", () => {
        expect(binarySearch(arr, 0)).toBe(-1);
        expect(binarySearch(arr, 101)).toBe(-1);
    });
    it("Empty Array", () => {
        expect(binarySearch([], 10)).toBe(-1);
    });
    it("Negative Values", () => {
        expect(binarySearch([-100, -50, -1], -100)).toBe(0);
        expect(binarySearch([-100, -50, -1], -50)).toBe(1);
        expect(binarySearch([-100, -50, -1], -1)).toBe(2);
    });
});
