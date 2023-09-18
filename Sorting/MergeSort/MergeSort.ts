/* 
Merge Sort is one of the most popular sorting algorithms
that is based on the principle of Divide and Conquer Algorithm.
It is an out-of-place, stable, and comparison-type sorting algorithm.

Here, a problem is divided into multiple sub-problems. 
Each sub-problem is solved individually. 
Finally, sub-problems are combined to form the final solution.

*Pseudocode
MergeSort(A, p, r):
    if p > r 
        return
    q = (p+r)/2
    mergeSort(A, p, q)
    mergeSort(A, q+1, r)
    merge(A, p, q, r)

*Time Complexity:
- worst: O(n * log n);
- average: O(n * log n);
- best: O(n * log n);

*Space complexity of merge sort is O(n).
*/

function merge(left: number[], right: number[]): number[] {
  let sortedArr: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift() as number);
    } else {
      sortedArr.push(right.shift() as number);
    }
  }

  return [...sortedArr, ...left, ...right];
}

export default function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}