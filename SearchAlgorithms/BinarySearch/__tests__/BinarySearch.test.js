"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BinarySearch_1 = __importDefault(require("../BinarySearch"));
//Array with numbers 1-100
var arr = Array.from(Array(100 + 1).keys()).slice(1); //?
describe("Binary Search", function () {
    it("Element is found", function () {
        expect((0, BinarySearch_1.default)(arr, 1)).toBe(0);
        expect((0, BinarySearch_1.default)(arr, 50)).toBe(49);
        expect((0, BinarySearch_1.default)(arr, 100)).toBe(99);
    });
    it("Element is not found", function () {
        expect((0, BinarySearch_1.default)(arr, 0)).toBe(-1);
        expect((0, BinarySearch_1.default)(arr, 101)).toBe(-1);
    });
    it("Empty Array", function () {
        expect((0, BinarySearch_1.default)([], 10)).toBe(-1);
    });
    it("Negative Values", function () {
        expect((0, BinarySearch_1.default)([-100, -50, -1], -100)).toBe(0);
        expect((0, BinarySearch_1.default)([-100, -50, -1], -50)).toBe(1);
        expect((0, BinarySearch_1.default)([-100, -50, -1], -1)).toBe(2);
    });
});
