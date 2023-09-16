// The Big O of this algorithm is O(sqrt(n))

export default function twoCrystallBalls(breaks: boolean[]): number {
  const jumpLength = Math.floor(Math.sqrt(breaks.length));

  let i = jumpLength;
  for (; i < breaks.length; i += jumpLength) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpLength;

  for (let j = i; j < i + jumpLength; j++) {
    if (breaks[j]) {
      return j;
    }
  }

  return -1;
}
