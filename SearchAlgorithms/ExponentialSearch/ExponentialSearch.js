"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Use the exponential search only when the sequence is unbounded or when you know the value is likely to be among the first ones.
Otherwise, use a binary search.
*/
function ExponentialSearch(arr, key) {
    if (arr[0] === key) {
        return 0;
    }
    var i = 1;
    while (i < arr.length && arr[i] <= key) {
        i *= 2;
    }
    return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), key);
}
exports.default = ExponentialSearch;
function binarySearch(arr, left, right, key) {
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
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
