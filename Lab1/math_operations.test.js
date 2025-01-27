const { add, subtract, multiply, divide } = require('./math_operations');

// Тести для функції додавання
test('adds positive integers correctly', () => {
    expect(add(3, 5)).toBe(8);
});

test('adds negative integers correctly', () => {
    expect(add(-3, -5)).toBe(-8);
});

test('adds positive floating point numbers correctly', () => {
    expect(add(3.5, 2.5)).toBeCloseTo(6);
});

test('adds negative floating point numbers correctly', () => {
    expect(add(-3.5, -2.5)).toBeCloseTo(-6);
});

// Тести для функції віднімання
test('subtracts positive integers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('subtracts negative integers correctly', () => {
    expect(subtract(-10, -4)).toBe(-6);
});

test('subtracts positive floating point numbers correctly', () => {
    expect(subtract(10.5, 4.5)).toBeCloseTo(6);
});

test('subtracts negative floating point numbers correctly', () => {
    expect(subtract(-10.5, -4.5)).toBeCloseTo(-6);
});

// Тести для функції множення
test('multiplies positive integers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiplies negative integers correctly', () => {
    expect(multiply(-2, 3)).toBe(-6);
});

test('multiplies positive floating point numbers correctly', () => {
    expect(multiply(2.5, 3.5)).toBeCloseTo(8.75);
});

test('multiplies negative floating point numbers correctly', () => {
    expect(multiply(-2.5, 3.5)).toBeCloseTo(-8.75);
});

// Тести для функції ділення
test('divides positive integers correctly', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divides negative integers correctly', () => {
    expect(divide(-10, 2)).toBe(-5);
});

test('divides by zero throws an error', () => {
    expect(() => {
        divide(10, 0);
    }).toThrow();
});

test('divides positive floating point numbers correctly', () => {
    expect(divide(10.5, 2.5)).toBeCloseTo(4.2);
});

test('divides negative floating point numbers correctly', () => {
    expect(divide(-10.5, 2.5)).toBeCloseTo(-4.2);
});
