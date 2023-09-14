"use strict";
// the function expects a sorted array.
Object.defineProperty(exports, "__esModule", { value: true });
function BinarySearch(sortedArray, key) {
    var start = 0;
    var end = sortedArray.length - 1;
    while (start <= end) {
        var middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return middle; // Found the key
        }
        else if (sortedArray[middle] < key) {
            start = middle + 1;
        }
        else if (sortedArray[middle] > key) {
            end = middle - 1;
        }
    }
    return -1; // Key was not found
}
exports.default = BinarySearch;
