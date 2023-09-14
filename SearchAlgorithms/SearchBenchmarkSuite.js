"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var benchmark_1 = __importDefault(require("benchmark"));
var LinearSearch_1 = __importDefault(require("./LinearSearch/LinearSearch"));
var SentinelLinearSearch_1 = __importDefault(require("./SentinelLinearSearch/SentinelLinearSearch"));
var BinarySearch_1 = __importDefault(require("./BinarySearch/BinarySearch"));
var MetaBinarySearch_1 = __importDefault(require("./MetaBinarySearch/MetaBinarySearch"));
var ExponentialSearch_1 = __importDefault(require("./ExponentialSearch/ExponentialSearch"));
// Create a new Benchmark.js suite
var suite = new benchmark_1.default.Suite();
// Create test subjects;
//Array with 10000 elements
function shuffleArray(arr) {
    var _a;
    var n = arr.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + Math.random() * 10));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
}
var array = Array.from(Array(10000 + 1).keys()).slice(1);
shuffleArray(array);
// Elements to search
var target = array[array.length - 100]; //?
// Add benchmark tests to the suite
suite
    .add("Linear Search", function () {
    (0, LinearSearch_1.default)(array, target);
})
    .add("Sentinel Linear Search", function () {
    (0, SentinelLinearSearch_1.default)(array, target);
})
    .add("Binary Search", function () {
    (0, BinarySearch_1.default)(array, target);
})
    .add("Meta Binary Search", function () {
    (0, MetaBinarySearch_1.default)(array, target);
})
    .add("Exponential Search", function () {
    (0, ExponentialSearch_1.default)(array, target);
})
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .run({ async: true });
