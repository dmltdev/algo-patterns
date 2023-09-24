// the function expects a sorted array.

export default function BinarySearch(
  sortedArray: number[],
  key: number
): number {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      return middle;
    } else if (sortedArray[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    } 
  }

  return -1;
}
