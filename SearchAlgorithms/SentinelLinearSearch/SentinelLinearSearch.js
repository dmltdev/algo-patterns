"use strict";
/*
The complexity reduction from O(n) to O(n-1)
is not significant enough to justify the added
complexity of reassigning the last element
and the potential for introducing bugs.

I enjoy using the default implementation of a linear search instead.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function SentinelLinearSearch(arr, key) {
    var last = arr[arr.length - 1];
    arr[arr.length - 1] = key;
    var i = 0;
    while (arr[i] !== key) {
        arr[arr.length - 1] = last;
        if (i < arr.length - 1 || arr[arr.length - 1] === key) {
            return i;
        }
        i++;
    }
    return -1;
}
exports.default = SentinelLinearSearch;
