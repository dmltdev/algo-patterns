export default function Factorial(num: number): number {
  if (num % 1 !== 0)
    throw new Error(
      'This is a pure factorial function, not a gamma function (also known as "half factorials")'
    );
  if (num === 1) return num;
  if (num === 0) return 1;
  if (num < 0) throw new Error("Negative numbers are not allowed");
  else return num * Factorial(num - 1);
}
