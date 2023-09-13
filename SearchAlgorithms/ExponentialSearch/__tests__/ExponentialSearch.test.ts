import ExponentialSearch from "../ExponentialSearch";

//Array with numbers 1-100
const arr = Array.from(Array(100+1).keys()).slice(1); //?

describe("Exponential Search", () => {
  it("Should return the index of the key when it exists in the array", () => {
    expect(ExponentialSearch(arr, 2)).toBe(1);
  })

  it("Should return -1 if the key does not exist in the array", () => {
    expect(ExponentialSearch(arr, -100)).toBe(-1);
  })

  it("Should handle the edge case when the key is at the begining of the array", () => {
    expect(ExponentialSearch(arr, 1)).toBe(0);
  })
});
