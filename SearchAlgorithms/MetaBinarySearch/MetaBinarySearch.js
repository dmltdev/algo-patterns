"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MetaBinarySearch(arr, key) {
    var n = arr.length;
    var lg = parseInt((Math.log(n - 1) / Math.log(2)).toString(), 2) + 1;
    var pos = 0;
    for (var i = lg; i >= 0; i--) {
        if (arr[pos] === key) {
            return key;
        }
        var newPos = pos | (1 << i);
        if (newPos < n && arr[newPos] <= key) {
            pos = newPos;
        }
    }
    return arr[pos] === key ? pos : -1;
}
exports.default = MetaBinarySearch;
// test
var A = [-2, 10, 100, 250, 32315];
MetaBinarySearch(A, 250); //?
