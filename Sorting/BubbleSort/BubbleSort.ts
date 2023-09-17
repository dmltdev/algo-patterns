/* 
Running time is O(n^2). 

The calculated Big O is ((n*(n+1)/2) => n^2 + n.
Since constants are dropped (n becomes insignificant in that formula
because n^2 will be way higher than just n), the result is O(n^2)

*/

export default function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
