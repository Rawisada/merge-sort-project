"use strict";
// merge.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    var merged = [];
    var i = 0;
    var j = 0;
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] <= collection2[j]) {
            merged.push(collection1[i]);
            i++;
        }
        else {
            merged.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        merged.push(collection2[j]);
        j++;
    }
    return merged;
}
exports.merge = merge;
// Unit Test
var result1 = merge([1, 3, 5], [2, 4, 6]);
console.log(result1); // Output: [1, 2, 3, 4, 5, 6]
var result2 = merge([], []);
console.log(result2); // Output: []
var result3 = merge([1, 3, 5], [2, 4, 6, 8, 10]);
console.log(result3); // Output: [1, 2, 3, 4, 5, 6, 8, 10]
