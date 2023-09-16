/*
Use the exponential search only when the sequence is unbounded or when you know the value is likely to be among the first ones.
Otherwise, use a binary search.
*/
export default function ExponentialSearch(arr, key) {
    if (arr[0] === key) {
        return 0;
    }
    let i = 1;
    while (i < arr.length && arr[i] <= key) {
        i *= 2;
    }
    return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), key);
}
function binarySearch(arr, left, right, key) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === key)
            return mid;
        if (arr[mid] < key) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
