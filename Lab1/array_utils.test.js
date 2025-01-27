const { calculateSum, filterPositiveNumbers, filterNegativeNumbers } = require('./array_utils');

let testArray;

beforeAll(() => {
    testArray = [1, -2, 3, -4, 5];
});

// Тести для функції calculateSum
test('calculateSum should return the correct sum of array elements', () => {
    expect(calculateSum(testArray)).toBe(3);
});

test('calculateSum should return 0 for an empty array', () => {
    expect(calculateSum([])).toBe(0);
});

// Тести для функції filterPositiveNumbers
test('filterPositiveNumbers should return an array containing only positive numbers', () => {
    expect(filterPositiveNumbers(testArray)).toEqual([1, 3, 5]);
});

test('filterPositiveNumbers should return an empty array for an array containing only negative numbers', () => {
    expect(filterPositiveNumbers([-1, -2, -3])).toEqual([]);
});

test('filterPositiveNumbers should return an empty array for an empty input array', () => {
    expect(filterPositiveNumbers([])).toEqual([]);
});

// Тести для функції filterNegativeNumbers
test('filterNegativeNumbers should return an array containing only negative numbers', () => {
    expect(filterNegativeNumbers(testArray)).toEqual([-2, -4]);
});

test('filterNegativeNumbers should return an empty array for an array containing only positive numbers', () => {
    expect(filterNegativeNumbers([1, 2, 3])).toEqual([]);
});

test('filterNegativeNumbers should return an empty array for an empty input array', () => {
    expect(filterNegativeNumbers([])).toEqual([]);
});
