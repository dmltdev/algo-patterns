"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function linearSearch(arr, key) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
exports.default = linearSearch;
