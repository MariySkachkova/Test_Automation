const { describe, test } = require('@jest/globals');

describe('Tests for array_utils.js', () => {
    const { calculateSum, filterPositiveNumbers, filterNegativeNumbers } = require('./array_utils');

    test('calculateSum should return the correct sum of array elements', () => {
        const array = [1, 2, 3, 4, 5];
        expect(calculateSum(array)).toBe(15);
    });

    test('filterPositiveNumbers should return an array containing only positive numbers', () => {
        const array = [-1, 2, -3, 4, -5];
        expect(filterPositiveNumbers(array)).toEqual([2, 4]);
    });

    test('filterNegativeNumbers should return an array containing only negative numbers', () => {
        const array = [-1, 2, -3, 4, -5];
        expect(filterNegativeNumbers(array)).toEqual([-1, -3, -5]);
    });
});

describe('Tests for string_operations.js', () => {
    const { isPalindrome, isAnagram } = require('./string_operations');

    test('isPalindrome should return true for a palindrome string', () => {
        expect(isPalindrome('radar')).toBe(true);
    });

    test('isAnagram should return true for anagram strings', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });
});
