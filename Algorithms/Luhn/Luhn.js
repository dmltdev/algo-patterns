"use strict";

/*
Luhn algorithm is a simple checksum formula used to 
validate a variety of identification numbers, such as credit card numbers, 
IMEI numbers, National Provider Identifier numbers in the US, Canadian Social Insurance Numbers, 
Israeli ID Numbers, South African ID Numbers, Greek Social Security Numbers (ΑΜΚΑ), and Greek VAT numbers (ΑΦΜ).
The algorithm is in the public domain and is in wide use today.

How to validate a Credit Card Number? https://www.freeformatter.com/credit-card-number-generator-validator.html
Most credit card number can be validated using the Luhn algorithm, which is more or a less a glorified Modulo 10 formula!

The Luhn Formula:
-- Drop the last digit from the number. The last digit is what we want to check against
-- Reverse the numbers
-- Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
-- Add all the numbers together
-- The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
*/

const validateCreditCard = (input) => {
  if (typeof input !== "string") {
    input = input.toString();
  }

  let creditCardInt = input.split("").map(Number);

  for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
    let tempValue = creditCardInt[i];
    tempValue *= 2;
    if (tempValue > 9) {
      tempValue = (tempValue % 10) + 1;
    }
    creditCardInt[i] = tempValue;
  }

  let total = 0;

  for (let i = 0; i < creditCardInt.length; i++) {
    total += creditCardInt[i];
  }

  return total % 10 === 0;
};

// Test
console.log(validateCreditCard(4929268955333011));
console.log(validateCreditCard("7992 7398 710"));
console.log(validateCreditCard(79927398710));
