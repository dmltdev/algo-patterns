/* 
Insertion Sort 

TODO: Add descriptnn for the algorithm: Big O, applications, pseudocode
!https://www.programiz.com/dsa/insertion-sort
*/

export default function insertionSort(arr: number[]): number[] {
  for (let step = 1; step < arr.length; step++) {
    const key = arr[step];
    let j = step - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}
