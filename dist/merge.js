"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2) {
    const merged = [];
    let i = 0;
    let j = 0;
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
const result1 = merge([1, 3, 5], [2, 4, 6]);
// Output: [1, 2, 3, 4, 5, 6]
console.log(result1);
const result3 = merge([1, 3, 5], [2, 4, 6, 8, 10]);
console.log(result3); // Output: [1, 2, 3, 4, 5, 6, 8, 10]
