import { merge } from '../src/merge';

describe('merge function', () => {
    it('merges two sorted arrays', () => {
        const result = merge([1, 3, 5], [2, 4, 6]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('merges arrays with duplicate elements', () => {
        const result = merge([1, 2, 2, 5], [2, 3, 4, 6]);
        expect(result).toEqual([1, 2, 2, 2, 3, 4, 5, 6]);
    });

    it('merges arrays with different lengths', () => {
        const result = merge([1, 3, 5], [2, 4, 6, 8, 10]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
    });
});