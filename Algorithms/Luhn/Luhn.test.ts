import validateCreditCard from "./Luhn.ts";

describe("Luhn algorithm", () => {
  test("validates correct credit card number (string)", () => {
    expect(validateCreditCard("4532778771091795")).toBeTruthy();
  });

  test("validates correct credit card number (number)", () => {
    expect(validateCreditCard(4532778771091795)).toBeTruthy();
  });

  test("rejects invalid credit card number", () => {
    expect(validateCreditCard("4532778771091794")).toBeTruthy();
  });

  test("handles non-standard input (such as spaces or dashes)", () => {
    expect(validateCreditCard("4532 7787 7109 1795")).toBeTruthy();
    expect(validateCreditCard("4532-7787-7109-1795")).toBeTruthy();
  });

  test("rejects empty string", () => {
    expect(validateCreditCard("")).toBeFalsy();
  });

  test("rejects non-numeric characters", () => {
    expect(validateCreditCard("abcd")).toBeFalsy();
  });

  test("rejects too short and too long numbers", () => {
    expect(validateCreditCard("123")).toBeFalsy();
    expect(validateCreditCard("12345678901234567890")).toBeFalsy();
  });
});
